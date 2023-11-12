class CreateEmployees < ActiveRecord::Migration[7.1]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :phone_number
      t.text :address
      t.string :email

      t.timestamps
    end
  end
end
