class HomeController < ApplicationController
  def index
    imagens = Dir.glob('app/assets/images/*.png')
    @files = imagens.map { |f| File.basename(f) }
  end

  def generator
    html = params[:html_to_generate]
    kit = IMGKit.new(html, :quality => 90, :width => 600, :height => 600, :encoding => "UTF-8")
    file = Rails.root + "public/teste.jpg"
    kit.stylesheets << "#{Rails.root}/app/assets/stylesheets/application.css"
    @img = kit.to_file(file)
  end
end
