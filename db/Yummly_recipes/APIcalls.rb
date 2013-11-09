# http://api.yummly.com/v1/api/recipe/recipe-id?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY
# 
# http://api.yummly.com/v1/api/recipe/203445?_app_id=a1de788e&_app_key=1667a9fb0914f97a1bfe70cf93039ab3

require 'nokogiri'
require 'json'
require 'rest-client'
require 'addressable/uri'

def get_recipe(recipe_string)
  url = Addressable::URI.new(
    :scheme => "http",
    :host => "api.yummly.com",
    :path => "/v1/api/recipe/#{recipe_string}",
    :query_values => {:_app_key => "1667a9fb0914f97a1bfe70cf93039ab3", :_app_id => "a1de788e"}
  ).to_s

  recipe = JSON.parse(RestClient.get(url))

  fJson = File.open("#{recipe_string}.json","w")
  fJson.write(recipe)
  fJson.close
end

@day1_recipes = [
  "Ottolenghi-soba-noodles-308684",
  "Yotam-Ottolenghi_s-Skillet-Baked-Eggs-with-Spinach_-Yogurt_-and-Spiced-Butter-Serious-Eats-203445",
  "Roasted-sweet-potatoes-_-fresh-figs-358334",
  "Yotam-ottolenghi_s-sweet-corn-polenta-with-eggplant-sauce-331169",
  "Black-pepper-tofu-358819",
  "Apple-and-Olive-Oil-Cake-with-Maple-Icing-379179", 
  "Paleo-chocolate-cupcakes-345344", 
  "Puerto-rican-beef-_everyday-paleo_-pg_61_-339334", 
  "Baby-Kale-Paleo-Taco-Salad-with-Chile-Lime-Dressing-379553", 
  "Paleo-Slow-Cooker-Pork-Loin-AllRecipes-38900", 
  "Paleo-Monkey-Bread-MyRecipes-237949", 
  "Paleo-Comfort-Food_-Here_s-A-Creamy-Shrimp-Fra-Diavolo-Recipe-450987", 
  "Egg-crust-vegetarian-breakfast-pizza-370357", 
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

@day1_recipes.each do |recipe|
  get_recipe(recipe)
end