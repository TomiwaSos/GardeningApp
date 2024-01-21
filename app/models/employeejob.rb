class Employeejob < ApplicationRecord
  validates :job, presence: true
  validates :employee, presence: true

  belongs_to :job
  belongs_to :employee
end
