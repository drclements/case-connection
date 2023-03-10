class ClientsController < ApplicationController
    before_action :authorize

    def index 
        render json: Client.all, each_serializer: ClientWithImageSerializer
    end

    def show 
        client = find_client
        render json: client, serializer: ClientWithImageSerializer
    end

    def create 
        client = Client.create!(client_params)
        render json: client, status: :created
    end

    def update 
       
        client = find_client
        client.update!(client_params)
        render json: client, status: :accepted
    end

    def destroy 
        client = find_client
        client.destroy 
        head :no_content
    end

    private 

    def client_params
        params.permit(:firstname, :lastname, :image, :age, :gender, :race, :ethnicity, :street_address, :city, :state, :zip, :county, :funding_id, :treatment_plan_id, :case_manager_id, :isActive)
    end


    def find_client
        Client.find(params[:id])
    end
end
