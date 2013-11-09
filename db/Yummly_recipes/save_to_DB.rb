require 'json'

recipe_string = "Paleo-chocolate-cupcakes-345344"
recipe_json2 = File.read("#{recipe_string}.json")

recipe_json2 = recipe_json2.gsub("=>", ":")
recipe_json2 = recipe_json2.gsub(":nil", ":\"\"")


fJson = File.open("temp3.txt","w")
fJson.write(recipe_json2)
fJson.close

recipe_json2 = File.read("temp3.txt")
parsed_json = JSON.parse(recipe_json2)


# p energy_value = parsed_json["nutritionEstimates"][0]["value"]
# p energy_unit = parsed_json["nutritionEstimates"][0]["unit"]["plural"]
# 
# p image_url = parsed_json["images"][0]["imageUrlsBySize"]["360"]
# p name = parsed_json["name"]
# p time_in_seconds = parsed_json["totalTimeInSeconds"]
# p image_url = parsed_json["images"][0]["hostedLargeUrl"]
# p servings = parsed_json["yield"]
# p source_name = parsed_json["source"]["sourceDisplayName"]
# p source_url = parsed_json["source"]["sourceRecipeUrl"]
# 
# 
# ingredients_array = parsed_json["ingredientLines"]
# ingredients_array.each do |ingredient|
#   
#   p ingredient
# end

