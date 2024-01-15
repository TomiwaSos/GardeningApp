class JobInvoice < ApplicationRecord
  belongs_to :invoice_id
  belongs_to :job_id
end
