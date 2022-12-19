# autoRentals
Dpremium Rentals is a website for a small car rental business. The site should have some basic information about the business and an input form where customers can sign up for a rental by entering their information, selecting a car type, the dates needed, and submitting the form for review. 

## Technologies Used: 
- HTML / CSS
- Bootstrap
- JavaScript / jQuery
- Node
- Express / React
- MongoDB / Mongoose

## Screenshot(s):

![Home](/wireframes/Home.png)

![Cars Index Sub](/wireframes/Sub-Cars-Index-Vehicle%20.png)

![Show Vehicle](/wireframes/Show-Vehicle.png)

![Edit Vehicle](/wireframes/Edit-Vehicle.png)

![Returning User](/wireframes/Returning-User.png)

![Schedule Rental](/wireframes/Schedule-Rental.png)

## Getting Started: 
A live version of this app is hosted on [Github.io.](https://pclarytx10.github.io) < more instructions coming >

[Trello Board](https://trello.com/b/Dtdt7fmv/auto-rentals-website)

### Features:
- [ ] Site Hosted on Heroku 
- [ ] Company Landing Page (About, Locations, Cars)
  - [x] Root "/" route
- [x] A Model for Vehicles
  - [x] Model Hosted on Atlas
  - [x] Seed route and initial data model
- [x] Full CRUD for Vehicles Model
  - [x] Index of Vehicles
  - [x] Add New / Create 
  - [x] Edit / Update
  - [x] Delete
- [ ] Full CRUD for Rentals Model
  - [ ] Index of Rentals
  - [ ] Add New / Create 
  - [ ] Edit / Update
  - [ ] Delete
- [ ] Car Rental Form (User Facing)
	- [ ] Location of Rental (Austin, Temple, etc.)
	- [ ] Delivery Needed (Y/N)
	- [ ] Car Type with Descriptions and Pricing 
	- [ ] Rental Start Date
	- [ ] Rental End Date
	- [ ] On submission of form, return Customer entered information and a summary of charges. (Days rented @ $$ per day. Additional fees, Taxes.)

### Stretch Goals:
- [ ] A Model for Customer / Login Information (Profile)
  - [ ] Model Hosted on Atlas
- [ ] Full CRUD for Profile Model
  - [ ] Index of Profiles
  - [ ] Add New / Create 
  - [ ] Edit / Update
  - [ ] Delete
- [ ] Customer Login
- [ ] Forms and Pages based on User Permissions (User, Admin)
- [ ] Customer views based on submitted rentals. Customer A can not see Customer B's rentals. etc.  
- [ ] Customer Registration (User Facing)
	- [ ] Customer email / password
	- [ ] Customer Full Name
	- [ ] Customer Address
	- [ ] Customer Phone Number
	- [ ] Customer Driver's License Information
		- [ ] Country 
		- [ ] ID Number
		- [ ] Issue Date
		- [ ] Expiration 
		- [ ] Address
		- [ ] Image Upload?
	- [ ] Customer Business Name
	- [ ] Customer Business Contact

### Future Enhancements:
- [ ] Customer / Admin Calendar
	- [ ] Calendar of upcomming rentals should show current and furture rentals based on user login level
	- [ ] Calendar events should be clickable and display full information popup 
- [ ] Communication
	- [ ] Email customer on submission
	- [ ] Email dPremium Admin list on submission
	- [ ] Email reminders of Rental Start / Stop information (Customer opt in)
- [ ] Back office function for validation of submitted rentals. (Admin Facing)
	- [ ] Drop down menu with review statuses (Pending, In Review, Validated, Canceled, Invalid)
	- [ ] Review Notes
	- [ ] Billing status (Pending, Billed, Paid)
	- [ ] List view reporting by Customer (Show Statuses above)
	- [ ] List view reporting by Billing Contact (Show Statuses above)
- Multi Language support (English, Korean) 
- Integration with Billing or Invoice System 

## Project MVP Description and Rubric
- [x] Have at least 1 data entity (A Model). This entity must represent the main functional idea for your app.

- [x] Have complete CRUD data operations on one of your data entities.

- [x] Utilize MongoDB and Mongoose.

- [x] Use a CSS stylesheet (Additional Use of a CSS Framework such as Bootstrap or Materialize is optional, however your must have your own stylesheet with some styles defined as well)

- [ ] Be deployed online (Heroku)

### Option Requirements:
- [ ] **Use authentication**.

- [ ] **Implement basic authorization** by restricting access to certain features, such as editing and deleting a resource, to an authenticated user, or the user that created that resource.

- [ ] Consume a third-party API.

- [ ] Expose its own API where it returns data resources as JSON. (You will need to research how to do this ... hint res.json())

## Planning Requirements
You need to have turned in the following before starting Project Week:
- [x]A Trello board with:
  - [x]User Stories, each moving from left to right in the following three lists in your board:
    - [x] Ice Box
    - [x]Current/MVP
    - [x]Completed
- [x]User Stories must follow the following template: As a user, I want [feature], because [reason]. The reason is optional if it's blatantly obvious. Note: Prioritize your user stories within the Ice Box with your "wish list" stories at the bottom.
- [ ] Wireframes of the main pages of functionality, e.g. Landing Page, Posts Index Page, Favorite Posts Page, Add Post Page, etc.
- [ ] An ERD showing the attributes of each model (or schema in the case of embedding) and the associations between them.