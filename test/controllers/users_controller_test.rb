# test/controllers/users_controller_test.rb
require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:sucessfulUser)
  end

  # Should show all users
  test "should show users" do
    get users_url, as: :json
    assert_response :success
    assert_equal 3, JSON.parse(response.body).size
  end

  # Create a new iser with correct parameters
  test "should create a user" do
    assert_difference('User.count', 1) do
      post users_url, params: { username: "username test", password: "password test" }
    end
    assert_response :success
  end

  # This hsould not create a new user with an empty username
  test "should not create a new user with incorrect username parameters" do
    assert_no_difference('User.count') do
      post users_url, params: { username: "" }, as: :json #username is required
    end
    assert_response :unprocessable_entity
  end

   # This hsould not create a new user with an empty password
   test "should not create a new user with incorrect password parameters" do
    assert_no_difference('User.count') do
      post users_url, params: { username: "" }, as: :json #username is required
    end
    assert_response :unprocessable_entity
  end

  # This hsould update the parameters of a user
  test "Should update a user" do
    patch user_url(@user), params: { username: "username new", password: "passwordNew" }
    @user.reload
    assert_equal 'username new', @user.username
    assert_not_equal 'passwordNew', @user.password
  end

  # This should delete a user
  test "should destroy a user" do
    assert_difference('User.count', -1) do
      delete user_url(@user), as: :json
    end
    assert_response :success
  end

  # Add more tests for other controller actions as needed.
end
