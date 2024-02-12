Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3000' # Adjust to match your React app's origin
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true, # Include if your frontend sends credentials like cookies
      expose: ['Authorization'] # Add any custom headers you want to expose
  end
end
