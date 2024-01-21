class CreateEmployeejobs < ActiveRecord::Migration[7.1]
  def change
    create_table :employeejobs do |t|
      t.integer :job_id
      t.integer :employee_id
      t.timestamps
    end
  end
end
