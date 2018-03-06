require 'sinatra'

get '/' do
  File.open("path/to/file")
end
