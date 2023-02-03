class CaseManagersController < ApplicationController

    def index 
        render json: CaseManager.all
    end

    def show 
        case_manager = find_user
        render json: case_manager
    end

    def create 
        cm = CaseManager.create!(cm_params)
        session[:case_manager_id] = cm.id 
        render json: cm, status: :created
    end

    def destroy 
        cm = find_user 
        cm.destroy 
        head :no_content
    end

    private 

    def find_user 
        CaseManager.find(params[:id])
    end

    def cm_params 
        params.permit(:firstname, :lastname, :email, :phone, :street_address, :city, :state, :zip, :title, :credential_id, :password, :password_confirmation)
    end
end
