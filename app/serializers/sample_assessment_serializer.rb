class SampleAssessmentSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :date, :client_id, :sa_one, :sa_two, :sa_three, :sa_four, :sa_five, :sa_total
end
