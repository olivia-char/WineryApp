class SiteController < ApplicationController
  def index
  end

  def wine
  end

  def membership
  end

  def contact
  end

  def about
  end

  def register
  end

  def subscribe
    gibbon = Gibbon::Request.new(api_key: ENV['MAIL_CHIMP'])
    gibbon.lists("3d8c448611").members.create(body: {email_address: params[:email], status: "subscribed"})
    render :nothing => true, :status => 200, :content_type => 'text/html'
  end
end
