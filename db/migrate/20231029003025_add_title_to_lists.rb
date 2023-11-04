class AddTitleToLists < ActiveRecord::Migration[7.0]
  def change
    unless column_exists? :lists, :title
      add_column :lists, :title, :string, null: false
    end
  end
end
