# app/controllers/users/passwords_controller.rb
class Users::SessionsController < Devise::SessionsController
    # Skip CSRF protection for API requests
    protect_from_forgery with: :null_session

    before_action :authenticate_user!, only: [:destroy]
    respond_to :json

    # POST /resource/sign_in
    def create
      super do |resource|
        if resource
          render json: { success: true, user: resource } and return
        end
      end
    end

    # DELETE /resource/sign_out
    def destroy
      super do
        render json: { success: true, message: 'Logged out successfully.' } and return
      end
    end

    private

    def respond_with(resource, _opts = {})
      render json: resource if resource.persisted?
    end

    def respond_to_on_destroy
      head :no_content
    end
  end
end
