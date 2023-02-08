class FundingsController < ApplicationController
    def index 
        render json: Funding.all
    end

    def show 
        funding = find_funding
        render json: funding
    end

    def create 
        funding = Funding.create!(funding_params)
        render json: funding, status: :created
    end

    def update 
        funding = find_funding
        funding.update!(funding_params)
        render json: funding, status: :accepted
    end

    def destroy 
        funding = find_funding
        funding.destroy 
        head :no_content
    end

    private 

    def funding_params
        params.permit(:name, :county, :funding_type, :year, :amount)
    end


    def find_funding
        Funding.find(params[:id])
    end
end
