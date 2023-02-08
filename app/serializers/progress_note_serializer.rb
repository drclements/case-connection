class ProgressNoteSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :date_of_service, :service_provided, :location, :client_id, :chart_id, :code_of_service, :date_of_note, :contact_type, :service_time, :travel_time, :documentation_time, :total_time, :treatment_goals, :session_focus, :interventions, :client_response, :plan, :staff_name, :created_at
end
