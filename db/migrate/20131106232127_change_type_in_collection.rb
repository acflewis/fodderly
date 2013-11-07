class ChangeTypeInCollection < ActiveRecord::Migration
  def up
    remove_column :collections, :type
    add_column :collections, :shop, :boolean, default: false
    change_column :collections, :name, :string, :null => false
  end

  def down
    add_column :collections, :type, :string
    remove_column :collections, :shop
    change_column :collections, :name
  end
end
