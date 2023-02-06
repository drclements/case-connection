class CreatePerceptionOfCares < ActiveRecord::Migration[6.1]
  def change
    create_table :perception_of_cares do |t|
      t.string :poc_one
      t.string :poc_two
      t.string :poc_three
      t.string :poc_four
      t.string :poc_five
      t.string :poc_six
      t.string :poc_seven
      t.string :poc_eight
      t.string :poc_nine
      t.string :poc_ten
      t.string :poc_eleven
      t.string :poc_twelve
      t.text :poc_additional_comments
      t.string :length_of_service
      t.string :date
      t.string :firstname 
      t.string :lastname
      t.integer :client_id

      t.timestamps
    end
  end
end
