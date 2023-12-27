class Employee < ApplicationRecord
  validates :name, presence: true
  validates :phone_number, presence: true
  validates :address, presence: true
  validates :email, presence: true
end
