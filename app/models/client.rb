class Client < ApplicationRecord
    # belongs_to :case_manager
    # belongs_to :mentor

    has_many :treatment_plans
end
