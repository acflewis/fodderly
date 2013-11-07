class ChangeRecipes < ActiveRecord::Migration
  def up
    change_column :recipes, :num_servings, :string
  end

  def down
    change_column :recipes, :num_servings, :integer
  end
end
