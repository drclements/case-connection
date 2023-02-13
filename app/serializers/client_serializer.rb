class ClientSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :image, :age, :gender, :race, :ethnicity, :street_address, :city, :state, :zip, :county, :isActive, :funding_id, :treatment_plan_id, :case_manager_id
end
