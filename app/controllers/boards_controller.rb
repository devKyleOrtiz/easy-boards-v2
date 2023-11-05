class BoardsController < ApplicationController
  before_action :set_board, only: %i[ show update destroy ]

  def index
    boards = Board.all
    render json: boards, each_serializer: BoardSerializer
  end

  # GET /boards/1
  def show
    render json: @board
  end

  # POST /boards
  def create
    @board = Board.new(board_params)

    if @board.save
      render json: @board, status: :created
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /boards/1
  def update
    if @board.update(board_params)
      render json: @board
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  # DELETE /boards/1
  def destroy
    @board.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_board
      @board = Board.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def board_params
      params.require(:board).permit(:title, :user_id)
    end
end
