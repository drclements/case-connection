class Client < ApplicationRecord
    belongs_to :case_manager, optional: true


    has_many :treatment_plans
    has_many :progress_notes
    has_many :perception_of_cares
    has_many :client_images
end
