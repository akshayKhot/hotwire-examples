class MagicController < ApplicationController
  def show
    @message = "Hotwire Examples"

    @examples = [
      { id: 'user_input', name: 'Handing User Input' },
      { id: 'attribute_binding', name: 'Attribute Bindings' },
    ]
  end

  def example
    @example_id = params[:demo]
  end
end