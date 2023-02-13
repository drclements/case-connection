class ProgramAnnouncementSerializer < ActiveModel::Serializer
  attributes :id, :date, :body, :case_manager_id
end
