class Jobs_InvoicesController < ApplicationController
  # Allows us to bypass postman security
  protect_from_forgery with: :null_session

  # Before we do anything execute function set_job for the following functions
  before_action :set_job, only: [:update, :destroy]

  def create
    @job_invoice = JobInvoice.new(job_invoice_params)

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
      render json: @job_invoice.errors
    end
  end

  def destroy
    @job_invoice.destroy
    render json: 'Job Invoice deleted'
  end

  private

  def set_job_invoice
    @job_invoice = JobInvoice.find(params[:id])
  end

  def job_invoice_params
    params.permit(:invoice_id, :job_id)
  end
end
