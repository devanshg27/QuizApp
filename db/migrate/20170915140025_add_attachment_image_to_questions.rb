class AddAttachmentImageToQuestions < ActiveRecord::Migration[5.1]
  def self.up
    change_table :questions do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :questions, :image
  end
end
