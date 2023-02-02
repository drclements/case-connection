class CaseManagerSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :phone, :street_address, :city, :state, :zip, :title, :credential_id, :password_digest
end
