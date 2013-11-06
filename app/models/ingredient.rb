class Ingredient < ActiveRecord::Base
  attr_accessible :food, :recipe_id
  belongs_to :recipe
end
