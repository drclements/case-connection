class ChangeDataTypeForPhoneInCaseManager < ActiveRecord::Migration[6.1]
  def change
    change_column :case_managers, :phone, :string
  end
end
