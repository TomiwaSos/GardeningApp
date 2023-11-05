class Client < ApplicationRecord
  validates :name, presence: true
  before_save { self.email = email.downcase}
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: {case_sensitive: false },length: {maximum: 105}, format: {with: VALID_EMAIL_REGEX}
  validates :number, presence: true
  validates :email, presence: true
end
