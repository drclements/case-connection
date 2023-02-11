class SessionsController < ApplicationController
    
    def show 
        user = CaseManager.find(session[:case_manager_id])
        render json: user, status: :ok , serializer: CaseManagerImageSerializer
    end

    def create 
        user = CaseManager.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:case_manager_id] = user.id 
            render json: user, status: :created 
        else 
            render json: {errors: ["invalid email or password"]}, status: :unauthorized
        end
    end

    def destroy 
        session.delete :case_manager_id
        head :no_content
    end
end
