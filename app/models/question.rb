class Question < ApplicationRecord
  validates :answer, presence: true, length: { minimum: 1, maximum: 400 }
  validates :option1, presence: true, length: { minimum: 1, maximum: 40 }
  validates :option2, presence: true, length: { minimum: 1, maximum: 40 }
  validates :option3, presence: true, length: { minimum: 1, maximum: 40 }
  validates :option4, presence: true, length: { minimum: 1, maximum: 40 }
  validates :answer, presence: true, length: { minimum: 1, maximum: 4 }
  belongs_to :subgenre
end
