class ProfileController < ApplicationController
  before_action :authenticate_any!
  before_action :authenticate_user!, only: [:index]

  def index
    @user = current_user
    redirect_to controller: 'profile', action: 'show', id: current_user.id
  end
  def show
    @user = User.find(params[:id])
    @same_user = (User.find(params[:id]) == current_user)
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
