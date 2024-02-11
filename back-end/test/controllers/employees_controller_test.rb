# test/controllers/employees_controller_test.rb
require "test_helper"

class EmployeesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @employee = employees(:completed)
  end

  test "should get index" do
    get employees_url, as: :json
    assert_response :success
    assert_equal 5, JSON.parse(response.body).size
  end

  test "should show employee" do
    get employee_path(@employee), as: :json
    assert_response :success
    assert_equal @employee.name, JSON.parse(response.body)["name"]
  end

  test "should create employee" do
    assert_difference('Employee.count', 1) do
      post employees_path, params: { name: 'Employee 1', phone_number: '07712345678', address: 'Address 1', email: 'Employee@example.com'}
    end

    assert_response :success
  end

  test "should not create a employee with invalid Name params" do
    assert_no_difference('Employee.count') do
      post employees_path, params: { name: '', phone_number: '07712345678', address: 'Address 1', email: 'Employee@example.com' }, as: :json # Name is required
    end

    assert_equal JSON.parse(response.body), {"name"=>["can't be blank"]}
  end

  test "should not create a employee with invalid phone number params" do
    assert_no_difference('Employee.count') do
      post employees_path, params: { name: 'Employee 1', phone_number: '', address: 'Address 1', email: 'Employee@example.com' }, as: :json # Phone Number is required
    end

    assert_equal JSON.parse(response.body), {"phone_number"=>["can't be blank"]}
  end

  test "should not create a employee with invalid address params" do
    assert_no_difference('Employee.count') do
      post employees_path, params: { name: 'Employee 1', phone_number: '07712345678', address: '', email: 'Employee@example.com' }, as: :json # Address is required
    end
    assert_equal JSON.parse(response.body), {"address"=>["can't be blank"]}
  end

  test "should not create a employee with invalid Email params" do
    assert_no_difference('Employee.count') do
      post employees_path, params: { name: 'Employee 1', phone_number: '07712345678', address: 'Address 1', email: '' }, as: :json # Email is required
    end

    assert_equal JSON.parse(response.body), {"email"=>["can't be blank"]}
  end

  test "should update employee" do
    patch employee_url(@employee), params: { name: 'Updated Name', phone_number: '987654321', address: 'Updated Addres', email: 'updatedEmployee@example.com'}
    @employee.reload
    assert_equal 'Updated Name', @employee.name
    assert_equal 'updatedEmployee@example.com', @employee.email
    assert_response :success
  end

  test "should destroy employee" do
    assert_difference('Employee.count', -1) do
      delete employee_url(@employee), as: :json
    end

    assert_response :success
  end
end
