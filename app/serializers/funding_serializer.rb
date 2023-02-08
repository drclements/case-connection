class FundingSerializer < ActiveModel::Serializer
  attributes :id, :name, :county, :funding_type, :year, :amount
end
