class Subgenre < ApplicationRecord
  validates :name, presence: true, length: { minimum: 1, maximum: 40 }
  validates :description, presence: true, length: { minimum: 1, maximum: 400 }
  belongs_to :genre
  has_many :questions, dependent: :destroy
  has_many :quizzes, dependent: :destroy
end
