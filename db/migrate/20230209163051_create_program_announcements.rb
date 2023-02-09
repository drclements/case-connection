class CreateProgramAnnouncements < ActiveRecord::Migration[6.1]
  def change
    create_table :program_announcements do |t|
      t.string :date
      t.text :body
      t.integer :case_manager_id

      t.timestamps
    end
  end
end
