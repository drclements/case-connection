class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  private

  def authorize
    return render json: { errors: ['Must be logged in to access'] }, status: :unauthorized unless session.include? :case_manager_id
  end

  def render_not_found
    render json: { erorrs: ['Not Found'] }, status: :not_found
  end

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  # def find_cm
  #   CaseManager.find(session[:case_manager_id])
  # end

end
