class HomeController < ApplicationController
  def index
    @features = Features.all
    puts @features

    gon.push({
      :features => Features.all,
      :config => {
        :user => Users.find(1)
      }
    })
  end
end
