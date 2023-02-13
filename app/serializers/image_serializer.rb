class ImageSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :image_data, :case_manager_id 
  has_one :case_manager

  def image_data 
    rails_blob_path(object.image_data, only_path: true) if object.image_data.attached?
  end
end
