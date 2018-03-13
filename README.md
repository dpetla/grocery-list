# Grocery List

This is a simple web based grocery list tool to track grocery items. It was built with Angular 5, Angular CLI 1.6, Bootstrap 4, Font Awesome, and Angular Material.


## Build 

 - Clone or download the repo
 - `npm install`
 - `npm start`
 - access http://localhost:4200/
 
## View
List
![](https://github.com/dpetla/grocery-list/blob/master/src/assets/images/grocery-list.jpg)

Item detail
![](https://github.com/dpetla/grocery-list/blob/master/src/assets/images/item-details.jpg)

## Consuming RESTful web services
 
Optionally, it is possible to run this app connected to a database. The branch [clientAPI](https://github.com/dpetla/grocery-list/tree/clientAPI) is customized to consume RESTful web service from the repo [grocery-list-web-service](https://github.com/dpetla/grocery-list-web-service).

Follow these steps to run this application using the web service:
- build and run `npm start` on branch clientAPI
- install, configure and run MySQL server
- build and run [grocery-list-web-service](https://github.com/dpetla/grocery-list-web-service)

