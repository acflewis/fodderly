class SessionsController < ApplicationController
  before_filter :require_no_current_user!, :only => [:create, :new]
  before_filter :require_current_user!, :only => [:destroy]

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.nil?
      render :json => "Credentials were wrong"
    else
      self.current_user = @user
      render :json => @user, :include => [:collections]
    end
  end

  def destroy
  logout_current_user!
   render :json => {text: "logged out"}
  end

  def new
    render :layout => "sign"
  end
end
