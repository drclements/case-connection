class CreateMentors < ActiveRecord::Migration[6.1]
  def change
    create_table :mentors do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.integer :phone
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :title
      t.integer :credential_id
      t.integer :case_manager_id

      t.timestamps
    end
  end
end
