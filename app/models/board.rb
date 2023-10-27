class Board < ApplicationRecord
     belongs_to :user
     has_many :lists
     validates :title, :user, presence: true
end
