class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :firstname
      t.string :lastname
      t.string :image
      t.integer :age
      t.string :gender
      t.string :race
      t.string :ethnicity
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :county
      t.boolean :isActive
      t.integer :funding_id
      t.integer :treatment_plan_id
      t.integer :mentor_id
      t.integer :case_manager_id

      t.timestamps
    end
  end
end
