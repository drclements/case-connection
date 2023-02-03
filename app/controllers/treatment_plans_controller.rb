class TreatmentPlansController < ApplicationController
    def index 
        render json: TreatmentPlan.all
    end

    def show 
        treatment_plan = find_treatment_plan
        render json: treatment_plan
    end

    def create 
        treatment_plan = TreatmentPlan.create!(treatment_plan_params)
        render json: treatment_plan, status: :created
    end

    def update 
       
        treatment_plan = find_treatment_plan
        treatment_plan.update!(treatment_plan_params)
        render json: treatment_plan, status: :accepted
    end

    def destroy 
        treatment_plan = find_treatment_plan
        treatment_plan.destroy 
        head :no_content
    end

    private 

    def treatment_plan_params
        params.permit(:firstname, :lastname, :date, :goals, :specific_objective, :interventions, :strengths, :barriers, :client_id, :case_manager, :date_of_completion)
    end


    def find_treatment_plan
        TreatmentPlan.find(params[:id])
    end
end
