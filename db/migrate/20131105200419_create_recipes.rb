class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name, :null => false
      t.string :ingredients, :null => false
      t.integer :energy_value
      t.string :energy_unit
      t.integer :total_time_s
      t.integer :num_servings
      t.string :source_url, :null => false
      t.string :source_name
      t.string :images
      
      t.timestamps
    end
  end
end
