class ClientImage < ApplicationRecord
    has_one_attached :image_data
    belongs_to :client
end
