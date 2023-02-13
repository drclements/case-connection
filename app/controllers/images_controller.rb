class ImagesController < ApplicationController
    before_action :set_image, only: %i[ show update destroy ]


    def index 
        @image = Image.all 
        render json: @image
    end

    def show 
        render json: @image 
    end

    def create 
        @image = Image.create!(image_params)
        render json: @image, status: :created
    end

    def update 
        @image.update!(image_params)
            render json: @image 
    end

    def destroy 
        @image.destroy
        head :no_content
    end

    private 
    
    def set_image 
        @image = Image.find(params[:id])
    end

    def image_params 
        params.permit(:image_data, :case_manager_id)
    end

end
