class CreateCaseManagers < ActiveRecord::Migration[6.1]
  def change
    create_table :case_managers do |t|
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
      t.string :password_digest

      t.timestamps
    end
  end
end
