class AddAttachmentAudioToQuestions < ActiveRecord::Migration[5.1]
  def self.up
    change_table :questions do |t|
      t.attachment :audio
    end
  end

  def self.down
    remove_attachment :questions, :audio
  end
end
