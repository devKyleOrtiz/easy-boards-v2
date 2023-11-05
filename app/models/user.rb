class User < ApplicationRecord
  has_secure_password
  has_many :workspaces
  has_many :boards, through: :workspaces
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
end
