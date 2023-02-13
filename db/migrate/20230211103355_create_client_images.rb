class CreateClientImages < ActiveRecord::Migration[6.1]
  def change
    create_table :client_images do |t|
      t.string :image_data
      t.integer :client_id

      t.timestamps
    end
  end
end
