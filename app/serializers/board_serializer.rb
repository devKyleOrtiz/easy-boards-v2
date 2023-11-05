class BoardSerializer < ActiveModel::Serializer
  attributes :id, :title, :workspace_id, :position, :background_url
end
