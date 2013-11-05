# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

cookies = Recipe.new(name: "cookies", ingredients: ["butter", "sugar", "eggs"], energy_value: 320, energy_unit: "calories", source_url: "www.google.com", images: ["http://lh4.ggpht.com/-Xj8r0KTP-qGU4nYJFLSZbG8OYZw7KIacdYWsgxRqrS6VlQASXkyUw0qKk3HH5_S5sicDu7ZlgrKmpajzbSJ=s730"])
cookies.save

cake = Recipe.new(name: "cake", ingredients: ["butter", "sugar", "eggs"], energy_value: 500, energy_unit: "calories", source_url: "www.google.com", images: ["http://lh3.ggpht.com/JyFxG7uXw6ehoVARTGq6Z9vBQaL1yfFuuz8iA4K2I7ySTWCLS2WTboUOqcHxCPXq-OMYmlrEXo6MiucSDfkoTg=s230-c"])
cake.save

