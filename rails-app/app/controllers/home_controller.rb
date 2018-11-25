class HomeController < ApplicationController
  def index
    @features = Features.all
    puts @features

    gon.push({
      :features => @features
    })
  end
end
