class ChangeClientMentorIdToCaseManager < ActiveRecord::Migration[6.1]
  def change
    rename_column :clients, :mentor_id, :case_manager_id
  end
end
