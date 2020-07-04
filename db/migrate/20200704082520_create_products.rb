class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string  :name,  presence: true, null: false, limit:   255
      t.decimal :price, presence: true, null: false, default: true, precision: 30, scale: 2
      t.text    :description

      t.timestamps
    end
  end
end
