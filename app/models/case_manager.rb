class CaseManager < ApplicationRecord
    has_secure_password
    has_many :program_announcements

    validates :email, uniqueness: { message: 'email already exists' }
end
