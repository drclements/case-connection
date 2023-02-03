class CreateTreatmentPlans < ActiveRecord::Migration[6.1]
  def change
    create_table :treatment_plans do |t|
      t.string :firstname
      t.string :lastname
      t.string :date
      t.text :goals
      t.text :specific_objective
      t.text :interventions
      t.text :strengths
      t.text :barriers
      t.integer :client_id
      t.string :case_manager
      t.string :date_of_completion

      t.timestamps
    end
  end
end
