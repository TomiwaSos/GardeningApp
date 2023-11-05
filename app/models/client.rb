class Client < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :number, presence: true
  before_save { self.email = email.downcase}
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: {case_sensitive: false },length: {maximum: 105}, format: {with: VALID_EMAIL_REGEX}

  # has_many :invoices
  # has_many :jobs
end
