class ClientImagesController < ApplicationController
    before_action :set_clientImg , only: %i[ show update destroy ]


    def index 
        @clientImg = ClientImage.all 
        render json: @clientImg
    end

    def show 
        render json: @clientImg 
    end

    def create 
        @clientImg = ClientImage.create!(clientImg_params)
        render json: @clientImg, status: :created
    end

    def update 
        @clientImg.update!(clientImg_params)
            render json: @clientImg 
    end

    def destroy 
        @clientImg.destroy
        head :no_content
    end

    private 
    
    def set_clientImg 
        @clientImg = ClientImage.find(params[:id])
    end

    def clientImg_params 
        params.permit(:image_data, :client_id)
    end
end
