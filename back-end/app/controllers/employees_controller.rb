class EmployeesController < ApplicationController
   # Allows us to bypass postman security
   protect_from_forgery with: :null_session

   # Before we do anything execute function set_employee for the following functions
   before_action :set_employee, only: [:show, :edit, :update, :destroy]

   def index
     @employees = Employee.all
     render json: @employees
   end

   def show
     render json: @employee
   end

   # Get the new page
   def new
     @employee = Employee.new
   end

   # Get the edit page
   def edit

   end

   def create
     @employee = Employee.new(employee_params)

     if @employee.save
       render json: @employee
     else
       render json: @employee.errors
     end
   end

   def update
     if @employee.update(employee_params)
       render json: @employee
     else
       render json: @employee.errors
     end
   end

   def destroy
     @employee.destroy
     render json: 'employee deleted'
   end

   private

   def set_employee
     @employee = Employee.find(params[:id])
   end

   def employee_params
     params.permit(:name, :phone_number, :address, :email)
   end
end
