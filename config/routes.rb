Rails.application.routes.draw do
  root 'magic#show', as: 'magic'
  get 'example', to: 'magic#example', as: 'example'
end
