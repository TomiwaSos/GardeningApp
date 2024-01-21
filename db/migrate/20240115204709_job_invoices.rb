class JobInvoices < ActiveRecord::Migration[7.1]
  def change
    create_table :job_invoices do |t|
    t.integer :invoice_id
    t.integer :job_id


    t.timestamps
    end
  end
end
