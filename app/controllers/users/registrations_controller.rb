# app/controllers/users/registrations_controller.rb
class Users::RegistrationsController < Devise::RegistrationsController
  # Allows us to bypass postman security
  protect_from_forgery with: :null_session
  respond_to :json

  def create
    build_resource(sign_up_params)

    resource.save
    if resource.persisted?
      if resource.active_for_authentication?
        sign_up(resource_name, resource)
        render json: { message: 'Signed up successfully.', user: resource }, status: :ok
      else
        expire_data_after_sign_in!
        render json: { message: "Signed up successfully. Please verify your email." }, status: :ok
      end
    else
      clean_up_passwords resource
      set_minimum_password_length
      render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def sign_up_params
    params.permit(:email, :password, :password_confirmation)
  end
end
