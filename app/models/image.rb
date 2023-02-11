class Image < ApplicationRecord
    has_one_attached :image_data
    belongs_to :case_manager
end
