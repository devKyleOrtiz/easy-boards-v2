class WorkspaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :position, :created_at, :updated_at
  has_many :boards, serializer: BoardSerializer
end
