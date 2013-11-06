# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

cookies = Recipe.new(name: "cookies", total_time_s: 3200, num_servings: 10, source_name: "Delia Smith", energy_value: 320, energy_unit: "calories", source_url: "www.google.com", image_url: "http://lh4.ggpht.com/-Xj8r0KTP-qGU4nYJFLSZbG8OYZw7KIacdYWsgxRqrS6VlQASXkyUw0qKk3HH5_S5sicDu7ZlgrKmpajzbSJ=s730")
cookies.save

cake = Recipe.new(name: "cake", total_time_s: 3200, num_servings: 10, source_name: "Delia Smith", energy_value: 500, energy_unit: "calories", source_url: "www.google.com", image_url: "http://lh3.ggpht.com/JyFxG7uXw6ehoVARTGq6Z9vBQaL1yfFuuz8iA4K2I7ySTWCLS2WTboUOqcHxCPXq-OMYmlrEXo6MiucSDfkoTg=s230-c")
cake.save


ingredient1 = Ingredient.new(recipe_id: 1, food: "1 cup sugar")
ingredient1.save
ingredient2 = Ingredient.new(recipe_id: 1, food: "1 cup flour")
ingredient2.save
ingredient3 = Ingredient.new(recipe_id: 1, food: "1 cup butter")
ingredient3.save
ingredient4 = Ingredient.new(recipe_id: 1, food: "1 egg")
ingredient4.save

ingredient5 = Ingredient.new(recipe_id: 2, food: "1 cup sugar")
ingredient5.save
ingredient6 = Ingredient.new(recipe_id: 2, food: "1 cup flour")
ingredient6.save
ingredient7 = Ingredient.new(recipe_id: 2, food: "2 cups butter")
ingredient7.save
ingredient8 = Ingredient.new(recipe_id: 2, food: "1 egg")
ingredient8.save