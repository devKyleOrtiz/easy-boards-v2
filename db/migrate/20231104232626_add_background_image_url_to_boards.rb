class AddBackgroundImageUrlToBoards < ActiveRecord::Migration[7.0]
  def change
    add_column :boards, :background_url, :string
  end
end
