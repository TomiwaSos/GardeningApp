class InvoicesController < ApplicationController
  # Allows us to bypass postman security
  protect_from_forgery with: :null_session

  # Before we do anything execute function set_invoice for the following functions
  before_action :set_invoice, only: [:show, :edit, :update, :destroy]

  def index
    @invoices = Invoice.all
    render json: {array: @invoices}, status: :ok
  end

  def show
    render json: @invoice
  end

  # Get the new page
  def new
    @invoice = Invoice.new
  end

  # Get the edit page
  def edit

  end

  def create
    @invoice = Invoice.new(invoice_params)

    if @invoice.save
      render json: @invoice
    else
      render json: @invoice.errors
    end
  end

  def update
    if @invoice.update(invoice_params)
      render json: @invoice
    else
      render json: @invoice.errors
    end
  end

  def destroy
    @invoice.destroy
    render json: 'invoice deleted'
  end

  private

  def set_invoice
    @invoice = Invoice.find(params[:id])
  end

  def invoice_params
    params.permit(:id, :amount_due, :due_date, :payment_status, :client_id)
  end
end
