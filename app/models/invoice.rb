class Invoice < ApplicationRecord
  validates :amount_due, presence: true, numericality: {only_float: true}
  validates :due_date, presence: true
  validates :payment_status, presence: true
  validates :client_id, presence: true

  has_many :job_invoices
  has_many :jobs, through: :job_invoices # allows us to call invoice.jobs
end
