class TreatmentPlanSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :date, :goals, :specific_objective, :interventions, :strengths, :barriers, :client_id, :case_manager, :date_of_completion
end
