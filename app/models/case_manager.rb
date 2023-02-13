class CaseManager < ApplicationRecord
    has_secure_password
    has_many :program_announcements
    has_many :images

    validates :email, uniqueness: { message: 'email already exists' }
end
