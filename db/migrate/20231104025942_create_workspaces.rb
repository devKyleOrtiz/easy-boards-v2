class CreateWorkspaces < ActiveRecord::Migration[7.0]
  def change
    create_table "workspaces" do |t|
      t.string "name", null: false
      t.integer "user_id", null: false
      t.integer "position"
      t.timestamps
    end
    add_index :workspaces, :user_id
    add_index :workspaces, [:user_id, :position], unique: true
  end
end
