class Collection < ActiveRecord::Base
  attr_accessible :user_id, :name, :type
  
  belongs_to :user
  has_many :collection_recipes
  has_many :recipes, through: :collection_recipes
end