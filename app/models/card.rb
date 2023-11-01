class Card < ApplicationRecord
    validates :title, presence: true
    validates :list_id, presence: true
    belongs_to :list
    acts_as_list scope: :list
end
