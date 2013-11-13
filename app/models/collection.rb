class Collection < ActiveRecord::Base
  attr_accessible :user_id, :name, :type
  
  belongs_to :user
  has_many :collection_recipes, dependent: :destroy
  has_many :recipes, through: :collection_recipes
  
  def as_json(options = {})
    super(:methods => [:user])
  end
  
end
