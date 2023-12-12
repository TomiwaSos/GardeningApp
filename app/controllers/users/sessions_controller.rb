# app/controllers/users/passwords_controller.rb
class Users::PasswordsController < Devise::PasswordsController
  # Skip before action if required, depending on your authentication setup
  skip_before_action :verify_authenticity_token

  # POST /resource/password
  def create
    self.resource = resource_class.send_reset_password_instructions(resource_params)
    yield resource if block_given?

    if successfully_sent?(resource)
      render json: { message: 'Password reset instructions have been sent to your email.' }, status: :ok
    else
      render json: resource.errors, status: :unprocessable_entity
    end
  end

  # PUT /resource/password
  def update
    self.resource = resource_class.reset_password_by_token(resource_params)
    yield resource if block_given?

    if resource.errors.empty?
      resource.unlock_access! if unlockable?(resource)
      if Devise.sign_in_after_reset_password
        flash_message = resource.active_for_authentication? ? :updated : :updated_not_active
        set_flash_message!(:notice, flash_message)
        resource.after_database_authentication
        sign_in(resource_name, resource)
      end
      render json: { message: 'Your password has been successfully reset.' }, status: :ok
    else
      set_minimum_password_length
      respond_with resource
    end
  end

  private

  # This is required for APIs, as devise normally relies on session cookies
  def respond_with(resource, _opts = {})
    render json: resource, status: :ok
  end

  def respond_to_on_destroy
    head :no_content
  end
end
