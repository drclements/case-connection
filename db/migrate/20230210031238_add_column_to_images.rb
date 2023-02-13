class AddColumnToImages < ActiveRecord::Migration[6.1]
  def change
    add_column :images, :image_data, :string
    add_column :images, :case_manager_id, :integer
  end
end
