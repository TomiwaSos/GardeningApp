class Employeejob < ApplicationRecord
  validates :job_id, presence: true
  validates :employee_id, presence: true
end
