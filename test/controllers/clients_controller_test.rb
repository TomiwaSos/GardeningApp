# test/controllers/clients_controller_test.rb
require 'test_helper'

class ClientsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @client = clients(:one) # assuming you have fixtures set up
  end

  test "should get index" do
    get clients_url, as: :json
    assert_response :success
    assert_equal 3, JSON.parse(response.body).size # assuming you have three clients in your fixtures
  end

  test "should show client" do
    get client_url(@client), as: :json
    assert_response :success
    assert_equal @client.name, JSON.parse(response.body)["name"]
  end

  test "should create client" do
    assert_difference('Client.count', 1) do
      post clients_url, params: { name: 'Jane Doe', address: '456 Another St', number: '555-6789', email: 'jane@example.com' }, as: :json
    end

    assert_response :success
  end

  test "should not create client with invalid params" do
    assert_no_difference('Client.count') do
      post clients_url, params: { name: '' }, as: :json # name is required
    end

    assert_response :unprocessable_entity
  end

  test "should update client" do
    patch client_url(@client), params: { name: 'Updated Name', email: 'updated@example.com' }, as: :json
    @client.reload
    assert_equal 'Updated Name', @client.name
    assert_equal 'updated@example.com', @client.email
    assert_response :success
  end

  test "should destroy client" do
    assert_difference('Client.count', -1) do
      delete client_url(@client), as: :json
    end

    assert_response :success
  end

  # Add more tests for other controller actions as needed.
end
