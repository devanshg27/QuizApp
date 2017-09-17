class Quiz < ApplicationRecord
  belongs_to :user
  belongs_to :subgenre
  belongs_to :question
end
