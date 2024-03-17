require "test_helper"

class InvoicesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @invoice = invoices(:sucessfulInvoice)
  end

  # Should show all invoices
  test "should show invoices" do
    get invoices_url, as: :json
    assert_response :success
    assert_equal 5, JSON.parse(response.body).size
  end

  # Creates a new invoice with correct parameters
  test "should create a new invoice" do
    assert_difference('Invoice.count', 1) do
      post invoices_url, params: {amount_due: 100.0, due_date: '01/03/2024', payment_status: 0, client_id: 1}
    end
    assert_response :success
  end

  # This should not create a new invoice with an empty Amount_Due parameter
  test "should not creat an invoice with an empty Amount_Due parameter" do
    assert_no_difference('Invoice.count') do
      post invoices_url, params: {amount_due: '' , due_date: '01/03/2024', payment_status: 0, client_id: 1}, as: :json # Amount_Due is required
    end
    assert_response :success
  end

    # This should not create a new invoice with an empty Due_date parameter
  test "should not creat an invoice with an empty Due_date parameter" do
    assert_no_difference('Invoice.count') do
      post invoices_url, params: {amount_due: 100.0, due_date: '', payment_status: 0, client_id: 1}, as: :json # Due_date is required
    end
    assert_response :success
  end

  # This should not create a new invoice with an empty Payment_status parameter
  test "should not creat an invoice with an empty Payment_status parameter" do
    assert_no_difference('Invoice.count') do
      post invoices_url, params: {amount_due: 100.0, due_date: '01/03/2024', payment_status: '', client_id: 1}, as: :json # Payment_status is required
    end
    assert_response :success
  end

  # This should not create a new invoice with an empty Clinet_id parameter
  test "should not creat an invoice with an empty Clinet_id parameter" do
    assert_no_difference('Invoice.count') do
      post invoices_url, params: {amount_due: 100.0, due_date: '01/03/2024', payment_status: 0, client_id: ''}, as: :json # Clinet_id is required
    end
    assert_response :success
  end

  # This should update the parameters of an invoice
  test "should update invoice" do
    patch invoice_url(@invoice), params: {amount_due: 200.0, due_date: '04/04/2024', payment_status: 1, client_id: 2}
    @invoice.reload
    assert_equal 200, @invoice.amount_due
    assert_equal Date.new(2024, 04, 04), @invoice.due_date
    assert_equal 1, @invoice.payment_status
    assert_equal 2, @invoice.client_id
  end

  # This should delete an invoice
  test "should delete invoice" do
    assert_difference('Invoice.count', -1) do
      delete invoice_url(@invoice), as: :json
    end
    assert_response :success
  end

  # Add more tests for other controller actions as needed.
end
