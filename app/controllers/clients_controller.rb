class ClientsController < ApplicationController
  # Allows us to bypass postman security
  protect_from_forgery with: :null_session

  # Before we do anything execute function set_client for the following functions
  before_action :set_client, only: [:show, :edit, :update, :destroy]

  def index
    @clients = Client.all
    render json: @clients
  end

  def show
    render json: @client
  end

  # Get the new page
  def new
    @client = Client.new
  end

  # Get the edit page
  def edit

  end

  def create
    @client = Client.new(client_params)

    if @client.save
      render json: @client, status: :created
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  def update
    if @client.update(client_params)
      render json: @client
    else
      render json: @client.errors
    end
  end

  def destroy
    @client.destroy
    render json: 'Client deleted'
  end

  private

  def set_client
    @client = Client.find(params[:id])
  end

  def client_params
    params.permit(:name, :address, :number, :email)
  end
end
