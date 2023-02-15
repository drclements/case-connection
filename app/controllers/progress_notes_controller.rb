class ProgressNotesController < ApplicationController
    before_action :authorize

    def index 
        render json: ProgressNote.all
    end

    def show 
        progress_note = find_progress_note
        render json: progress_note
    end

    def create 
        progress_note = ProgressNote.create!(progress_note_params)
        render json: progress_note, status: :created
    end

    def update 
        progress_note = find_progress_note
        progress_note.update!(progress_note_params)
        render json: progress_note, status: :accepted
    end

    def destroy 
        progress_note = find_progress_note
        progress_note.destroy 
        head :no_content
    end

    private 

    def progress_note_params
        params.permit(:firstname, :lastname, :date_of_service, :service_provided, :location, :client_id, :chart_id, :code_of_service, :date_of_note, :contact_type, :service_time, :travel_time, :documentation_time, :total_time, :treatment_goals, :session_focus, :interventions, :client_response, :plan, :staff_name)
    end


    def find_progress_note
        ProgressNote.find(params[:id])
    end
end
