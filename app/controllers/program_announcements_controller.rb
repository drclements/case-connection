class ProgramAnnouncementsController < ApplicationController
    before_action :authorize

    def index 
        render json: ProgramAnnouncement.all
    end

    def show 
        program_announcement = find_program_announcement
        render json: program_announcement
    end

    def create 
        program_announcement = ProgramAnnouncement.create!(program_announcement_params)
        render json: program_announcement, status: :created
    end

    def update 
        program_announcement = find_program_announcement
        program_announcement.update!(program_announcement_params)
        render json: program_announcement, status: :accepted
    end

    def destroy 
        program_announcement = find_program_announcement
        program_announcement.destroy 
        head :no_content
    end

    private 

    def program_announcement_params
        params.permit(:date, :body, :case_manager_id)
    end


    def find_program_announcement
        ProgramAnnouncement.find(params[:id])
    end
end
