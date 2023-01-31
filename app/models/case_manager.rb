class CaseManager < ApplicationRecord
    has_secure_password

    validates :email, uniqueness: { message: 'email already exists' }
end
