class UsersController < ApplicationController
  before_action :set_user, only: %i[update destroy ]
  wrap_parameters format: []
  skip_before_action :authorize, only: :create
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
def show
  user = User.includes(workspaces: :boards).find_by(id: session[:user_id])
  if user
    render json: user, serializer: UserSerializer
  else
    render json: { error: "Not authorized" }, status: :unauthorized
  end
end


  # POST /users
  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end
    
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def render_not_found_response(exception)
      render json: { error: exception.message }, status: :not_found
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:email, :password)
    end
end
