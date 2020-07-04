class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :price, :description
end
