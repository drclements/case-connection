class DropMentors < ActiveRecord::Migration[6.1]
  def change
    drop_table :mentors
  end
end
