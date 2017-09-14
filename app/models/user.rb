class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  validates :name, presence: true, length: { minimum: 4, maximum: 40 }
  validates_format_of :name, with: /^[a-z A-Z]*$/, :multiline => true
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, omniauth_providers: [:facebook]

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

  def self.from_omniauth(auth)
    user = User.find_by('email = ?', auth['info']['email'])
    if user.blank?
       user = User.new(
         {
          provider: auth.provider,
          uid: auth.uid,
          name: auth.info.name,
          email: auth.info.email,
          password: Devise.friendly_token[0,20]
         }
       )
       user.save!
    end
    user
  end
end
