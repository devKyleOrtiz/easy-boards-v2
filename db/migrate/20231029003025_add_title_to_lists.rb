class AddTitleToLists < ActiveRecord::Migration[7.0]
  def change
    add_column :lists, :title, :string, null: false
  end
end
