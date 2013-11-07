require 'json'

recipe_string = "Ottolenghi-soba-noodles-308684"
recipe_json = File.read("../../../Yummly_recipes/#{recipe_string}.json")
recipe_json = recipe_json.gsub("nil", "\"\"")
recipe_json = recipe_json.gsub("=>", ":")
parsed_json = JSON.parse(recipe_json)

# fJson = File.open("temp3.txt","w")
# fJson.write(parsed_json)
# fJson.close

r = Recipe.new
r.energy_value = parsed_json["nutritionEstimates"][0]["value"]
r.energy_unit = parsed_json["nutritionEstimates"][0]["unit"]["plural"]

r.image_url = parsed_json["images"][0]["imageUrlsBySize"]["360"]
r.name = parsed_json["name"]
r.total_time_s = parsed_json["totalTimeInSeconds"]
r.image_url = parsed_json["images"][0]["hostedLargeUrl"]
r.num_servings = parsed_json["yield"]
r.source_name = parsed_json["source"]["sourceDisplayName"]
r.source_url = parsed_json["source"]["sourceRecipeUrl"]

r.save!

# ingredients_array = parsed_json["ingredientLines"]
# ingredients_array.each do |ingredient|
#   i = Ingredient.new
#   i.food = ingredient
#   i.recipe_id = 
#   i.save!
# end

