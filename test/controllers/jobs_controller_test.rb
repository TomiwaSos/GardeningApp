# test/controllers/jobs_controller_test.rb
require 'test_helper'

class JobsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @job = jobs(:sucessfulJob)
  end

  # Should show all jobs
  test "should show index" do
    get jobs_url, as: :json
    assert_response :success
    assert_equal 5, JSON.parse(response.body).size
  end

  # Creates a new job with correct parameters
  test "should create a job" do
    assert_difference('Job.count', 1) do
      post jobs_url, params: { description: "Description Test", date: "01/01/2024", location: "123 Address", client_id: "1" }
    end
    assert_response :success
  end

  # This should not create a new job with an empty description
  test "should not create a client with invalid description" do
    assert_no_difference('Job.count') do
      post jobs_url, params: { description: "" }, as: :json # description is requried
    end
    assert_response :success
  end

  # This should not create a new job with an empty date
  test "should not create a client with invalid date" do
    assert_no_difference('Job.count') do
      post jobs_url, params: { date: "" }, as: :json # date is requried
    end
    assert_response :success
  end

  # This should not create a new job with an empty location
  test "should not create a client with invalid location" do
    assert_no_difference('Job.count') do
      post jobs_url, params: { location: "" }, as: :json # location is requried
    end
    assert_response :success
  end

  # This should not create a new job with an empty client_ID
  test "should not create a client with invalid client_id" do
    assert_no_difference('Job.count') do
      post jobs_url, params: { client_id: "" }, as: :json # client_id is requried
    end
    assert_response :success
  end

  # This should update the parameters of a job
  test "should update job" do
    patch job_url(@job), params: { description: "Updated Description", date: "02/02/2024", location: "456 Address", client_id: "2"}
    @job.reload
    assert_equal 'Updated Description', @job.description
    assert_equal Date.new(2024, 02, 02), @job.date
    assert_equal '456 Address', @job.location
    assert_equal 2, @job.client_id
  end

  # This should delete a job
  test "should destroy job" do
    assert_difference('Job.count', -1) do
      delete job_url(@job), as: :json
    end
    assert_response :success
  end

  # Add more tests for other controller actions as needed.
end
