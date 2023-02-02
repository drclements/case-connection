class MentorSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :phone, :street_address, :city, :state, :zip, :title, :credential_id, :case_manager_id
end
