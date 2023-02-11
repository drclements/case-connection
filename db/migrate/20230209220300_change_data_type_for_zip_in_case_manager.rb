class ChangeDataTypeForZipInCaseManager < ActiveRecord::Migration[6.1]
  def change
    def change
      change_column :case_managers, :zip, :string
    end
  end
end
