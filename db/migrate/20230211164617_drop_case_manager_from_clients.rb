class DropCaseManagerFromClients < ActiveRecord::Migration[6.1]
  def change
    remove_column :clients, :case_manager_id
  end
end
