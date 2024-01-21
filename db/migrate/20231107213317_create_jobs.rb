class CreateJobs < ActiveRecord::Migration[7.1]
  def change
    create_table :jobs do |t|
      t.text :description
      t.date :date
      t.text :location
      t.integer :client_id

      t.timestamps
    end
  end
end
