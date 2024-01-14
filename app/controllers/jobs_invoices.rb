class Jobs_InvoicesController < ApplicationController
  # Allows us to bypass postman security
  protect_from_forgery with: :null_session

  # Before we do anything execute function set_job for the following functions
  before_action :set_job, only: [:show, :edit, :update, :destroy]

  def index
    @jobs_invoices = Jobs_Invoices.all
    render json: @jobs_invoices
  end

  def show
    render json: @Job_Invoice
  end

  # Get the new page
  def new
    @Job_Invoice = Job_Invoice.new
  end

  # Get the edit page
  def edit

  end

  def create
    @job_invoice = Job_Invoice.new(job_invoice_params)

    if @job_invoice.save
      render json: @job_invoice
    else
      render json: @job_invoice.errors
    end
  end

  def update
    if @job_invoice.update(job_invoice_params)
      render json: @job_invoice
    else
      render json: @job@job_invoice.errors
    end
  end

  def destroy
    @job@job_invoice.destroy
    render json: 'Job Invoice deleted'
  end

  private

  def set_job
    @job = Job_Invoice.find(params[:id])
  end

  def job_invoice_params
    params.permit(:invoice_id, :job_id)
  end
end
