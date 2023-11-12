class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  devise  :database_authenticatable, :registerable, :recoverable,
          :rememberable, :validatable, :confirmable, :lockable, 
          :timeoutable, :trackable, :omniauthable, :authentication_keys => [:username]

  validates :username, uniqueness: true   
  validates :email, uniqueness: true

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if username = conditions.delete(:username)
      puts "Username to find: #{username}"
      where(conditions.to_hash).where(["lower(username) = :value", { value: username.downcase }]).first
    else
      where(conditions.to_hash).first
    end
  end

  def valid_password?(password)
    Devise::Encryptor.compare(self.class, encrypted_password, password)
  end
end