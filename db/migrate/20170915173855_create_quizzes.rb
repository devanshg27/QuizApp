class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.references :user, foreign_key: true
      t.references :subgenre, foreign_key: true
      t.references :question, foreign_key: true
      t.integer :score
      t.text :randomGenerator
      t.boolean :doubleTryLeft
      t.boolean :skipQuestionLeft
      t.boolean :hasFinished

      t.timestamps
    end
  end
end
