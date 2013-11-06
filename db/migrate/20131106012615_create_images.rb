class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :recipe_id, :null => false
      t.string :url, :null => false

      t.timestamps
    end
    add_index :images, :recipe_id
  end
end
