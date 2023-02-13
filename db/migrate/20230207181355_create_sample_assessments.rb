class CreateSampleAssessments < ActiveRecord::Migration[6.1]
  def change
    create_table :sample_assessments do |t|
      t.string :firstname
      t.string :lastname
      t.string :date
      t.integer :client_id
      t.integer :sa_one
      t.integer :sa_two
      t.integer :sa_three
      t.integer :sa_four
      t.integer :sa_five
      t.integer :sa_total

      t.timestamps
    end
  end
end
