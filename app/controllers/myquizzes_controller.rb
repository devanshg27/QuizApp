class MyquizzesController < ApplicationController
  before_action :authenticate_user!
  def index
  end

  private

  def authenticate_any!
    if admin_signed_in?
        true
    else
        authenticate_user!
    end
  end
end
