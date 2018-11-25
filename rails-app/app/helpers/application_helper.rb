module ApplicationHelper
  def load_manifest_resources(manifest_url)
    require 'net/http'
    require 'json'

    @assets_path = manifest_url.gsub(/(\/manifest.json)|(\/asset-manifest.json)/, '')
    puts @assets_path

    url = URI.parse(manifest_url)
    req = Net::HTTP::Get.new(url.to_s)
    res = Net::HTTP.start(url.host, url.port) {|http|
      http.request(req)
    }

    @manifest_content = JSON.parse(res.body)

    @manifest_content.keys().each do |key|
      if key.match(/\.js$/)
        content_for(:manifest_js) do
          javascript_include_tag(@assets_path + @manifest_content[key])
        end
      elsif key.match(/\.css$/)
        content_for(:manifest_css) do
          stylesheet_link_tag(@assets_path + @manifest_content[key])
        end
      end
    end

    raw('')
  end
end
