# Project Report
11218809 Flavio Salles <br>
14609637 Tiago Chaves Bezerra Rocha <br>
11219004 Yasmin Osajima de Araujo

This is the project of an Online Store for Web Development Introduction class, 2023, ICMC-USP, São Carlos, Brazil.

## Requirements
This project requires the following base requirements: React, HTML, CSS, and JavaScript.
We also used the design system Material UI.

## Project Description
The project consists on a Van Gogh e-commerce website, an online store that specializes in selling products related to the famous painter, Vincent Van Gogh. The website offers a wide range of products including printings, mugs, toys, and other kinds of decoration.


The user will be able to browse and filter products by collection or price, add products to their cart, and view the total price of their purchase. They will then be able to checkout and complete their purchase by entering their payment method information. The user can also access their profile page, update their personal information, such as address and telephone, and check their order details.


The website owner will have access to an admin panel where they can view statistics such as total sales, amount of sold products, and revenue. They will also be able to manage their products by editing prices and availability of the items inventory items.


Information to be saved on the server includes client data (name, email, phone, address, password, isAdmin), product data (name, quantity in stock, price, picture, collection), and order data (id, client, products, payment method, total price, timestamp).


The project pages are: main page, product page, cart, sign in, sign up, profile page (with two sections: all orders made and profile information), single product page, order completed page, administrator product page, administrator sales overview page and administrator single product page. 


At this milestone, we have developed all the required pages and implemented all client-side functionalities.

The screen mockups for the website can be found on [Figma](https://www.figma.com/file/4SYAvVb0Y8XL6viOJ67HNA/OnlineStoreMockup?type=design&node-id=0%3A1&t=ur51hlypofs9jZOS-1) and the diagram navigation can be found below:<br><br>
<img src="./navigation_diagram.png" alt="Navigation Diagram"/>

## Comments About the Code
We have developed the project using React, CSS, and JavaScript. The backend data for the products is stored as JavaScript objects. However, for more dynamic data such as user accounts, values, and cart details, they are stored in the browser's local storage.

## Test Plan
There is no Test Plan.

## Test Results
There is no Test Results.

## Build Procedures
1. Install Node.js: You can download and install Node.js at https://nodejs.org. 
2. Navigate to the project directory: Use the cd command to navigate into the project directory: cd project-directory
3. Install dependencies: In the project directory, use the following command to install the required dependencies: npm install
4. Build the project: Once the dependencies are installed, use the following command: npm run build
5. Run the project: After completing the build process,use the following command: npm start

## Problems
No problems were found during the development of the project.

## Comments
To access the admin panel, use the following credentials:

Email: admin@admin
Password: admin
