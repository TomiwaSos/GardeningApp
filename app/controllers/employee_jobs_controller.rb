class EmployeeJobsController < ApplicationController
  protect_from_forgery with: :null_session

  before_action :set_job, only: [:show, :edit, :update, :destroy]

  def index
    @employeeJobs = EmployeeJob.all
    render json: @employeejobs
  end

  def show
    render json: @employeejob
  end

  def new
    @employeejob = @EmployeeJob.new
  end

  def edit

  end

  def create
    @employeejob = EmployeeJob.new(employeejob_params)
    if @employeejob.save
      render json: @employeejob
    else
      render json: @employeejob.errors
    end
  end

  def update
    if @employeejob.update(employeejob_params)
      render json: @employeejob
    else
      render json: @employeejob.errors
    end
  end

  def destroy
    @employeejob.destroy
    rednder json: 'Employee Job deleted'
  end

  private

  def set_employeejob
    @employeejob = EmployeeJob.find(params[:id])
  end

  def employeejob_params
    params.permit(:job_id, :employee_id)
end
