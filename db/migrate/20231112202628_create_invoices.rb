class CreateInvoices < ActiveRecord::Migration[7.1]
  def change
    create_table :invoices do |t|
      t.float :amount_due
      t.date :due_date
      t.integer :payment_status
      t.integer :client_id

      t.timestamps
    end
  end
end
