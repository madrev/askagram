require 'test_helper'

class Api::QuestionsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_questions_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_questions_destroy_url
    assert_response :success
  end

  test "should get show" do
    get api_questions_show_url
    assert_response :success
  end

end
