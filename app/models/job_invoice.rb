class Job_invoice < ApplicationRecord
  validates :id, presence: true
  has_one, validates: invoice_id, presnece: true
  has_one, validated: job_id, presence: true
end
