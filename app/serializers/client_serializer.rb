class ClientSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :image, :age, :gender, :race, :ethnicity, :street_address, :city, :state, :zip, :county, :isActive, :funding_id, :progress_note_id, :treatment_plan_id, :mentor_id
end
