class Board < ApplicationRecord
     belongs_to :workspace
  has_many :lists
     validates :title, presence: true
end
