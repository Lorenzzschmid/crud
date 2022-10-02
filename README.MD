# Create an API of webstore products 

In this project we will create our own API of webstore products. 

## What you will be doing

This project will allow you to practise using:

> - HTTP methods
> - Database MongoDB CRUD operations

This project assumes you've already had experience with:

> - Routing Express
> - MongoDB Schemas

## Tasks

Before starting run `npm install` to install all the required packages. 


## Task 1 - Complete the .env file

1. Create a new `.env` file to store the database environment variables.
   
2. Configure your database env variables. 


## Task 2 - Create a new Product Schema. 

We have to create a new Product Schema with the following fields: 

- name - String 
- price - Number
- category - String (example "INDOORS", "OUTDOORS")
- instock - Boolean (true or false)


## Task 3 - Add new product  (CREATE)

  1. Create a new `post` endpoint `/create` in `productsRoutes`. 

  2. Use the `create` or  `save` method to create a new product in the database. 

Example using save

 ```javascript
const tea = new Tea({ name: 'Sencha', type: 'GREENTEA' });
await tea.save();
   ```

Example using create

 ```javascript
const tea = await Tea.create({ name: 'Sencha', type: 'GREENTEA' });
   ```

## Task 4 - Get list of products  (READ)
  1. Create a new `get` endpoint `/list` in `productsRoutes`. 

  2. Use the `find` method to get return a list of all products in the database. 

Example using find

 ```javascript
const teas = await Tea.find(); // all the teas
   ```

## Task 5 - Get product by id (READ)
  1. Create a new `get` endpoint `/:id` in `productsRoutes`. 

  2. Use the `findById` method to return the product with the id specified in the parameters. 

Example using findById

 ```javascript
const tea = await Tea.findById('dsf5464sdsms5d');
   ```

## Task 6 - Get products by category (READ)
  1. Create a new `get` endpoint `/category/:category` in `productsRoutes`. 

  2. Use the `find` method to return the products with the category specified in the parameters. 

Example using find 

 ```javascript
const teas = await Tea.find({ type: 'GREENTEA' });
   ```

## Task 7 - Update category of product by id (UPDATE)
  1. Create a new `put` endpoint `/update/category/:id` in `productsRoutes`. 

  2. Use the `findByIdAndUpdate` method to update the product 

Example using findByIdAndUpdate 

 ```javascript
const tea = await Tea.findByIdAndUpdate('dfsdfqsfdsfqsd', { type: 'BLACKTEA' });
   ```



## Task 8 - Delete one product by name  (DELETE)
  1. Create a new `delete` endpoint `/delete/:name` in `productsRoutes`. 

  2. Use the `findOneAndDelete` method to delete the product 

Example using findOneAndDelete 

 ```javascript
const teas = await Tea.findOneAndDelete({ name: 'Sencha' });
   ```


## Task 9 - Delete all products by category  (DELETE)
  1. Create a new `delete` endpoint `/delete/category/:category` in `productsRoutes`. 

  2. Use the `deleteMany` method to delete the product 

Example using deleteMany 

 ```javascript
const resultDelete = await Tea.deleteMany({ type: 'GREENTEA' });

   ```





