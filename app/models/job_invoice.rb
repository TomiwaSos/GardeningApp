class JobInvoice < ApplicationRecord
  belongs_to :invoice
  belongs_to :job
end
