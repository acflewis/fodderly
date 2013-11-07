# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131106232127) do

  create_table "collection_recipes", :force => true do |t|
    t.integer  "recipe_id"
    t.integer  "collection_id"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  add_index "collection_recipes", ["collection_id"], :name => "index_collection_recipes_on_collection_id"
  add_index "collection_recipes", ["recipe_id"], :name => "index_collection_recipes_on_recipe_id"

  create_table "collections", :force => true do |t|
    t.integer  "user_id"
    t.string   "name",                          :null => false
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
    t.boolean  "shop",       :default => false
  end

  add_index "collections", ["user_id"], :name => "index_collections_on_user_id"

  create_table "ingredients", :force => true do |t|
    t.integer  "recipe_id",  :null => false
    t.string   "food",       :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "ingredients", ["recipe_id"], :name => "index_ingredients_on_recipe_id"

  create_table "recipes", :force => true do |t|
    t.string   "name",         :null => false
    t.integer  "energy_value"
    t.string   "energy_unit"
    t.integer  "total_time_s"
    t.integer  "num_servings"
    t.string   "source_url",   :null => false
    t.string   "source_name"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.string   "image_url"
  end

  create_table "users", :force => true do |t|
    t.string   "username",        :null => false
    t.string   "password_digest", :null => false
    t.string   "session_token",   :null => false
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "users", ["session_token"], :name => "index_users_on_session_token", :unique => true
  add_index "users", ["username"], :name => "index_users_on_username", :unique => true

end
