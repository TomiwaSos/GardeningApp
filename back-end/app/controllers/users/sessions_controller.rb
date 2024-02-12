class Users::SessionsController < Devise::SessionsController
  respond_to :json

  def create
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)

    if resource.persisted?
      render json: { message: 'Logged in successfully.', user: resource }, status: :ok
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
