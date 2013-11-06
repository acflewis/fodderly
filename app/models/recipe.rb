class Recipe < ActiveRecord::Base
  attr_accessible :name, :image_url, :energy_value, :energy_unit, :total_time_s, :num_servings, :source_url, :source_name

  has_many :images
  has_many :ingredients
end
