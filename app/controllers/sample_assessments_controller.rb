class SampleAssessmentsController < ApplicationController
    def index 
        render json: SampleAssessment.all
    end

    def show 
        sample_assessment = find_sample_assessment
        render json: sample_assessment
    end

    def create 
        sample_assessment = SampleAssessment.create!(sample_assessment_params)
        render json: sample_assessment, status: :created
    end

    def update 
        sample_assessment = find_sample_assessment
        sample_assessment.update!(sample_assessment_params)
        render json: sample_assessment, status: :accepted
    end

    def destroy 
        sample_assessment = find_sample_assessment
        sample_assessment.destroy 
        head :no_content
    end

    private 

    def sample_assessment_params
        params.permit(:sa_one, :sa_two, :sa_three, :sa_four, :sa_five, :sa_total, :date, :firstname, :lastname, :client_id)
    end


    def find_sample_assessment
        SampleAssessment.find(params[:id])
    end
end
