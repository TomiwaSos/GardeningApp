# app/controllers/users/registrations_controller.rb
class Users::RegistrationsController < Devise::RegistrationsController
  before_action :credentials, only: [:create]
  before_action :authenticate_user!

  # curl -X GET http://localhost:3000/users
  def index
    render json: User.all
  end

  # curl -X POST -H "Content-Type: application/json" -d '{"user": {"username": "eww", "email": "tes@st.com", "password": "wwwwewqewqw"}}' http://localhost:3000/users
  def register_user
    create = User.create(configure_sign_up_params)
    if create.save
      render json: create, status: :created # Status 201, everything was executed alright
    else
      render json: create.errors, status: :unprocessable_entity # Error Status 422 understand request but couldn't execute as required.
    end
  end


#----------------------------------------------------------------------------
  private

  def credentials
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :password])
  end
#----------------------------------------------------------------------------

end
