module Accessible
  extend ActiveSupport::Concern
  included do
    before_action :check_user
  end

  protected
  def check_user
    flash.clear
    if current_admin
      # if you have rails_admin. You can redirect anywhere really
      redirect_to root_path && return
    elsif current_user
      # The authenticated root path can be defined in your routes.rb in: devise_scope :user do...
      redirect_to root_path && return
    end
  end
end