class List < ApplicationRecord
     acts_as_list scope: :board
     belongs_to :board
     has_many :cards
end
