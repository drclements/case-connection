class CaseManagerImageSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :phone, :street_address, :city, :state, :zip, :title, :credential_id, :password_digest
  has_many :images
end
