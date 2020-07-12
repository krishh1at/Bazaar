class Api::V1::ProductsController < ApplicationController
  def index
    products = Product.order_by_updated_at
    render json: ProductSerializer.new(products, options).serialized_json
  end

  def show
    render json: ProductSerializer.new(product).serialized_json
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: ProductSerializer.new(product).serialized_json
    else
      render status: 400, error: "error", json: product.errors.full_messages
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :price, :description)
  end

  def product
    @product = Product.find(params[:id])
  end

  def options
    @options ||= { include: %i[] }
  end
end
