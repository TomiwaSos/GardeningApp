class Job < ApplicationRecord
  validates :description, presence: true
  validates :date, presence: true
  validates :location, presence: true
  validates :client_id, presence: true

  has_many :job_invoices
  has_many :invoices, through: :job_invoices # allows us to call job.invoices
end
