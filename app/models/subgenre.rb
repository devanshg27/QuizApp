class Subgenre < ApplicationRecord
  belongs_to :genre
  has_many :questions, dependent: :destroy
end
