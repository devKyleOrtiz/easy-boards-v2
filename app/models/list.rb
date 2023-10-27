class List < ApplicationRecord
     acts_as_list scope: :board_id
     belongs_to :board
end
