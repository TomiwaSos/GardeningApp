# app/controllers/users/sessions_controller.rb
class Users::SessionsController < Devise::SessionsController
  before_action :debug_info
  before_action :configure_sign_in_params, only: [:create]

  # GET /users/sign_in
  #def new
  #  super
  #end

  # POST /users/sign_in
  # curl -X POST -H "Content-Type: application/json" -d '{"user": {"username": "te", "password": "your_password"}}' http://localhost:3000/users/sign_in
def create
  puts "Received parameters: #{params.inspect}"
  byebug
  user = User.find_by(username: params[:user][:username])

  if user && user.authenticate_by(params[:user][:password])
    puts "Password validation successful for user: #{user.username}"
    sign_in(user)
    render json: user, status: :ok
  else
    puts "Password validation failed for user: #{params[:user][:username]}"
    render json: { error: 'Invalid password' }, status: :unauthorized
  end
end


  # DELETE /users/sign_out
  #def destroy
  #  super
  #end

#------------------------------------------------------------------------------
  private

  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:user, keys: [:username, :password])
  end

  def debug_info
    puts "Debug info: SessionsController action is being triggered."
  end
  #------------------------------------------------------------------------------
end
