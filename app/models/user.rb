class User < ApplicationRecord
  has_secure_password
  has_many :boards
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
end
