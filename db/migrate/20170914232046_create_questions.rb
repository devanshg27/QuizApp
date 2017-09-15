class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.references :subgenre, foreign_key: true
      t.text :question
      t.string :option1
      t.string :option2
      t.string :option3
      t.string :option4
      t.string :answer

      t.timestamps
    end
  end
end
