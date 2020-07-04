class Product < ApplicationRecord
  validates :name,  presence: true
  validates :price, presence: true, numericality: { greater_than_equal_to: 0 }

  scope :order_by_updated_at, -> { order(updated_at: :desc) }
end
