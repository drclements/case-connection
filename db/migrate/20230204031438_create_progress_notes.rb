class CreateProgressNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :progress_notes do |t|
      t.string :firstname
      t.string :lastname
      t.string :date_of_service
      t.string :service_provided
      t.string :location
      t.integer :client_id
      t.string :chart_id
      t.integer :code_of_service
      t.string :date_of_note
      t.string :contact_type
      t.integer :service_time
      t.integer :travel_time
      t.integer :documentation_time
      t.integer :total_time
      t.text :treatment_goals
      t.text :session_focus
      t.text :interventions
      t.text :client_response
      t.text :plan
      t.string :staff_name

      t.timestamps
    end
  end
end
