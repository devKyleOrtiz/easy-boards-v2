class WorkspacesController < ApplicationController
    wrap_parameters format: []
    before_action :set_workspace, only: %i[show update destroy]
    skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    def index
      user = User.find(params[:user_id])
      user_workspaces = user.workspaces.order(:position)
      render json: user_workspaces, each_serializer: WorkspaceSerializer
    end
  
    def show
      render json: @workspace, include: ['boards'], serializer: WorkspaceSerializer
    end
    
  
    def create
      workspace = Workspace.new(workspace_params.merge(user_id: params[:user_id]))
      workspace.save!
      render json: workspace, status: :created
    end
  
    def update
      if @workspace.update(workspace_params)
        render json: @workspace, status: :ok
      else
        render_unprocessable_entity_response(@workspace)
      end
    end
  
    def destroy
      @workspace.destroy
      head :no_content
    end
  
    private
      def set_workspace
        @workspace = Workspace.find(params[:id])
      end
  
      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      end
  
      def render_not_found_response(exception)
        render json: { error: exception.message }, status: :not_found
      end
  
      def workspace_params
        params.require(:workspace).permit(:name, :position)
      end
  end
  