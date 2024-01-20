class Employee < ApplicationRecord
  validates :name, presence: true
  validates :phone_number, presence: true
  validates :address, presence: true
  validates :email, presence: true

  has_many :employee_jobs
  has_many :jobs, through: :employee_jobs # allows us to call employee.jobs
end
