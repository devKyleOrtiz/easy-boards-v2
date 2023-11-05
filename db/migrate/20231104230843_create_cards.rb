class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table "cards", force: :cascade do |t|
      t.string "title", null: false
      t.text "description"
      t.datetime "due_date"
      t.integer "list_id", null: false
      t.integer "position"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.index ["list_id"], name: "index_cards_on_list_id"
    end
    
  end
end
