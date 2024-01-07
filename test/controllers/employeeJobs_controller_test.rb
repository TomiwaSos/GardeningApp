# test/controllers/employeeJobs_controller_test.rb
require 'test_helper'

class EmployeeJobsController < ActionDispatch::IntegrationTest
  setup do
    @employeeJob = employeeJobs(:sucessfulEntry)
  end

  test "should get index" do
    get employeeJobs_url, as: :json
    assert_response :success
    assert_equal 3, JSON.parse(response.body).size
  end

    test "should create Employee Job" do
      assert_difference('EmployeeJob.count', 1) do
        post employeeJobs_url, params: { job_id: '01', employee_id: '1'}, as: :json
    end
    assert_response :unprocessable_entity
  end

    test "should not create Employee Job with invalid params" do
      assert_difference('EmployeeJob.count', 1) do
        post employeeJobs_url, params: {  job_id: '', employee_id: '1'}, as: :json
    end
    assert_equal JSON.parse(response.body), {"job_id"=>["can't be blank"]}
  end

  test "should not create Employee Job" do
    assert_difference('EmployeeJob.count', 1) do
      post employeeJobs_url, params: {  job_id: '01', employee_id: ''}, as: :json
  end
  assert_equal JSON.parse(response.body), {"employee_id"=>["can't be blank"]}
  end

end
