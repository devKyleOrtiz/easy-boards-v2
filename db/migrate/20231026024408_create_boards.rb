class CreateBoards < ActiveRecord::Migration[7.0]
  def change
    create_table :boards, force: :cascade do |t|
      t.string :title, null: false
      t.integer :workspace_id, null: false
      t.integer :position
      t.timestamps
      t.index [:workspace_id, :position], unique: true
    end
  end
end
