class PerceptionOfCaresController < ApplicationController
    before_action :authorize

    def index 
        render json: PerceptionOfCare.all
    end

    def show 
        perception_of_care = find_perception_of_care
        render json: perception_of_care
    end

    def create 
        perception_of_care = PerceptionOfCare.create!(perception_of_care_params)
        render json: perception_of_care, status: :created
    end

    def update 
        perception_of_care = find_perception_of_care
        perception_of_care.update!(perception_of_care_params)
        render json: perception_of_care, status: :accepted
    end

    def destroy 
        perception_of_care = find_perception_of_care
        perception_of_care.destroy 
        head :no_content
    end

    private 

    def perception_of_care_params
        params.permit(:poc_one, :poc_two, :poc_three, :poc_four, :poc_five, :poc_six, :poc_seven, :poc_eight, :poc_nine, :poc_ten, :poc_eleven, :poc_twelve, :poc_additional_comments, :length_of_service, :date, :firstname, :lastname, :client_id)
    end


    def find_perception_of_care
        PerceptionOfCare.find(params[:id])
    end
end
