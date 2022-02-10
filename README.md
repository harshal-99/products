# Install dependencies

Run
> npm i

Create .env file it should have PORT, MONGODB_URI

Execute the code by running
> npm start 

deployed site https://polar-atoll-76444.herokuapp.com/api/category

# POST, PUT /api/details 
>{
> product_name: String,
> quantity: Number,
> price: Number,
> category_id: Number
> }

# POST, PUT /api/category

>{
> category_name: String,
> status: String,
> }


# Accucia Task Details

1) create product category master with CRUD
operation.

    (fields:category_name,status,createdAt,updatedAt).


2) create product details insert operation using API
    (fields:product_name,price,quantity,category_id,createdAt,updatedAt)


3) create API to get product category with latest 3 product details
