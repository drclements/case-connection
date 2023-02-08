class CreateFundings < ActiveRecord::Migration[6.1]
  def change
    create_table :fundings do |t|
      t.string :name
      t.string :county
      t.string :funding_type
      t.string :year
      t.integer :amount

      t.timestamps
    end
  end
end
