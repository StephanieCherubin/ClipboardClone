require 'sinatra'

get '/' do
  File.open("public/clipboard.html")
end
