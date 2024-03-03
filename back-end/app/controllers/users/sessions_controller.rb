class Users::SessionsController < Devise::SessionsController
  respond_to :json
  skip_before_action :verify_authenticity_token, only: [:create]

  def create
    user = User.find_for_authentication(email: params[:user][:email])

    if user && user.valid_password?(params[:user][:password])
      render json: { message: 'Logged in successfully.', user: resource, csrf_token: form_authenticity_token }, status: :ok
    else
      render json: { message: 'Sign in failed.' }, status: :unauthorized
    end
  end

  # DELETE /users/sign_out
  def destroy
    signed_out = sign_out(resource_name)
    if signed_out
      render json: { message: 'Logged out successfully.' }, status: :ok
    else
      render json: { message: 'Sign out failed.' }, status: :unauthorized
    end
  end
end
