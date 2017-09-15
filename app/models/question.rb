class Question < ApplicationRecord
  validates :answer, presence: true, length: { minimum: 1, maximum: 400 }
  validates :option1, presence: true, length: { minimum: 1, maximum: 40 }
  validates :option2, presence: true, length: { minimum: 1, maximum: 40 }
  validates :option3, presence: true, length: { minimum: 1, maximum: 40 }
  validates :option4, presence: true, length: { minimum: 1, maximum: 40 }
  validates :answer, presence: true, length: { minimum: 1, maximum: 4 }
  has_attached_file :image, styles: { :medium => "640x" }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  has_attached_file :audio
  validates_attachment_content_type :audio, :content_type => /\Aaudio\/.*\Z/
  belongs_to :subgenre
end
