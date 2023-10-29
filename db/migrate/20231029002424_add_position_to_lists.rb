class AddPositionToLists < ActiveRecord::Migration[7.0]
  def change
    unless column_exists? :lists, :position
      add_column :lists, :position, :integer
      add_index :lists, [:board_id, :position], unique: true
    end
  end
end
