class JobsController < ApplicationController
  # Allows us to bypass postman security
  protect_from_forgery with: :null_session

  # Before we do anything execute function set_job for the following functions
  before_action :set_job, only: [:show, :edit, :update, :destroy]

  def index
    @jobs = Job.all
    render json: @jobs
  end

  def show
    render json: @job
  end

  # Get the new page
  def new
    @job = Job.new
  end

  # Get the edit page
  def edit

  end

  def create
    @job = Job.new(job_params)

    if @job.save
      render json: @job
    else
      render json: @job.errors
    end
  end

  def update
    if @job.update(job_params)
      render json: @job
    else
      render json: @job.errors
    end
  end

  def destroy
    @job.destroy
    render json: 'Job deleted'
  end

  private

  def set_job
    @job = Job.find(params[:id])
  end

  def job_params
    params.permit(:description, :date, :location, :client_id)
  end
end
