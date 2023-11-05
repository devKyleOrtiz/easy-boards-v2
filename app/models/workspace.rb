class Workspace < ApplicationRecord
    belongs_to :user
    has_many :boards
    has_many :lists
    validates :name, presence: true 
  end
  