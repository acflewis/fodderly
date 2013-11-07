# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


require 'json'
  
@recipes = ["Ottolenghi-soba-noodles-308684",
  "Apple-and-Olive-Oil-Cake-with-Maple-Icing-379179", 
  "Paleo-chocolate-cupcakes-345344", 
  "Paleo-Monkey-Bread-MyRecipes-237949", 
  "Egg-crust-vegetarian-breakfast-pizza-370357", 
  "Yotam-Ottolenghi_s-Skillet-Baked-Eggs-with-Spinach_-Yogurt_-and-Spiced-Butter-Serious-Eats-203445",
  "Roasted-sweet-potatoes-_-fresh-figs-358334",
  "Yotam-ottolenghi_s-sweet-corn-polenta-with-eggplant-sauce-331169",
  "Black-pepper-tofu-358819",
  "Puerto-rican-beef-_everyday-paleo_-pg_61_-339334", 
  "Baby-Kale-Paleo-Taco-Salad-with-Chile-Lime-Dressing-379553", 
  "Paleo-Slow-Cooker-Pork-Loin-AllRecipes-38900", 
  "Paleo-Comfort-Food_-Here_s-A-Creamy-Shrimp-Fra-Diavolo-Recipe-450987", 
  "Carrot-Fritters-Delicieux-198217", 
  "Honey-garlic-chicken-slow-cooker-310273", 
  "Slow-cooker-cranbery-dijon-roast-310198", 
  "Slow-cooker-tomato-basil-soup-310039", 
  "Best-slow-cooker-bolognese-sauce-ever_-368558", 
  "Grilled-sweet-potato-salad-with-green-onion_-basil_-thyme_-and-feta-309438", 
  "Caprese-Salad-The-Pioneer-Woman-Cooks-_-Ree-Drummond-41155", 
  "Pan-Seared-Scallops-with-Asparagus-and-Baby-Leeks-Recipe-Leite_s-Culinaria-296364", 
  "Jamie-oliver_s-roasted-shoulder-of-lamb-with-smashed-vegetables-and-greens-355791", 
  "Roasted-butternut-squash-with-moroccan-spices-309744", 
  "Lebanese-style-stuffed-eggplant-307084", 
  "Stuffed-eggplant-with-lamb-and-pine-nuts-from-_jerusalem_-304922", 
  "Scallops-with-Cauliflower-Puree_-Parsley_-and-Capers-Martha-Stewart-192140", 
  "Tomato_-Onion_-Avocado-Salad-Simply-Recipes-42519", 
  "Grilled-apricot-salad-with-mozzarella-_-prosciutto-333182", 
  "Creamy-chardonnay-shrimp-368987", 
  "Roasted-tomatoes-with-shrimp-and-feta-368909", 
  "Thai-chicken-quinoa-bowl-336044", 
  "Broiled-Salmon-with-Thai-Sweet-Chili-Glaze-Once-Upon-A-Chef-200053", 
  "Grilled-salmon-with-maple-sriracha-lime-glaze-358241", 
  "Peach-Crumble-I-Adore-Food-55298", 
  "Pear_-cranberry-and-gingersnap-crumble-305677", 
  "Chocolate-mayonnaise-cake-296765", 
  "Rosemary-Lemonade-Cake-Serious-Eats-41837", 
  "Tarte-Tatin-Recipe-Leite_s-Culinaria-198321", 
  "EASY-AMARETTO-APPLE-TART-TATIN-379765", 
  "Paleo-dirty-rice-345402", 
  "Paleo-coconut-macaroons-345396", 
  "Yummy-Baked-Sweet-Potato-Fries-I-Adore-Food-55273", 
  "Olive-oil-and-tangerine-chocolate-cake-351244", 
  "Korean-beef-rice-bowl-315050", 
  "Grilled-buttermilk-chicken-368724", 
  "Grilled-figs-with-goat-cheese-and-prosciutto-369061", 
  "Lemon-cool-whip-cookies-368862", 
  "Hot-Chocolate-Bread-Pudding-Serious-Eats-200616", 
  "Chocolate-Guinness-Cake-Simply-Recipes-287086", 
  "Lime-yogurt-cake-with-blackberry-sauce-305506"
]

@recipes.each do |recipe_string|

  recipe_json = File.read("../Yummly_recipes/#{recipe_string}.json")

  recipe_json = recipe_json.gsub("=>", ":")
  recipe_json = recipe_json.gsub(":nil", ":\"\"")
  parsed_json = JSON.parse(recipe_json)
  r = Recipe.new
  
  unless parsed_json["nutritionEstimates"].empty?
    r.energy_value = parsed_json["nutritionEstimates"][0]["value"]
    r.energy_unit = parsed_json["nutritionEstimates"][0]["unit"]["plural"]
  end

  r.name = parsed_json["name"]
  r.total_time_s = parsed_json["totalTimeInSeconds"]
  unless parsed_json["images"].empty?
    r.image_url = parsed_json["images"][0]["hostedLargeUrl"]
  end
  r.num_servings = parsed_json["yield"]
  r.source_name = parsed_json["source"]["sourceDisplayName"]
  r.source_url = parsed_json["source"]["sourceRecipeUrl"]
  r.save

  ingredients_array = parsed_json["ingredientLines"]
  ingredients_array.each do |ingredient|
    i = Ingredient.new
    i.food = ingredient
    i.recipe_id = r.id
    i.save!
  end

end


# cookies = Recipe.new(name: "cookies", total_time_s: 3200, num_servings: 10, source_name: "Delia Smith", energy_value: 320, energy_unit: "calories", source_url: "www.google.com", image_url: "http://lh4.ggpht.com/-Xj8r0KTP-qGU4nYJFLSZbG8OYZw7KIacdYWsgxRqrS6VlQASXkyUw0qKk3HH5_S5sicDu7ZlgrKmpajzbSJ=s730")
# cookies.save
# 
# cake = Recipe.new(name: "cake", total_time_s: 3200, num_servings: 10, source_name: "Delia Smith", energy_value: 500, energy_unit: "calories", source_url: "www.google.com", image_url: "http://lh3.ggpht.com/JyFxG7uXw6ehoVARTGq6Z9vBQaL1yfFuuz8iA4K2I7ySTWCLS2WTboUOqcHxCPXq-OMYmlrEXo6MiucSDfkoTg=s230-c")
# cake.save
# 
# 
# ingredient1 = Ingredient.new(recipe_id: 1, food: "1 cup sugar")
# ingredient1.save
# ingredient2 = Ingredient.new(recipe_id: 1, food: "1 cup flour")
# ingredient2.save
# ingredient3 = Ingredient.new(recipe_id: 1, food: "1 cup butter")
# ingredient3.save
# ingredient4 = Ingredient.new(recipe_id: 1, food: "1 egg")
# ingredient4.save
# 
# ingredient5 = Ingredient.new(recipe_id: 2, food: "1 cup sugar")
# ingredient5.save
# ingredient6 = Ingredient.new(recipe_id: 2, food: "1 cup flour")
# ingredient6.save
# ingredient7 = Ingredient.new(recipe_id: 2, food: "2 cups butter")
# ingredient7.save
# ingredient8 = Ingredient.new(recipe_id: 2, food: "1 egg")
# ingredient8.save