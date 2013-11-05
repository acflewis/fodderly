class Recipe < ActiveRecord::Base
  attr_accessible :name, :ingredients, :energy_value, :energy_unit, :total_time_s, :num_servings, :source_url, :source_name, :images
  serialize :ingredients
  serialize :images
end
