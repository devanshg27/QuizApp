class Genre < ApplicationRecord
  validates :name, presence: true, length: { minimum: 4, maximum: 40 }
  validates :description, presence: true, length: { minimum: 4, maximum: 400 }
end
