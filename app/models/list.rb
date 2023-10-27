class List < ApplicationRecord
     acts_as_list
     belongs_to :board
end
