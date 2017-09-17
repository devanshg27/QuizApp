class ProfileController < ApplicationController

  def index
    @user = current_user
    redirect_to controller: 'profile', action: 'show', id: current_user.id
  end
  def show
    @user = User.find(params[:id])
  end

end
