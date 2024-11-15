# SB Foods - Food Ordering App

## Project Overview
SB Foods is a comprehensive food ordering application catering to three user roles:
- **Admin**: Manage the entire platform, including users, orders, and analytics.
- **Customer**: Browse menus, place orders, and track delivery.
- **Restaurant Owner**: Manage menus, process orders, and track inventory.

The project aims to streamline the food ordering process, providing an intuitive and secure experience for all users.

---

## Features
- **Streamlined Ordering**: Simple interface for customers to browse and order food.
- **Efficient Restaurant Management**: Real-time updates for menu and inventory management.
- **Comprehensive Admin Control**: Oversee operations, manage users, and analyze data.
- **Secure Transactions**: Reliable payment processing.
- **Responsive Design**: Optimized for all device types.

---

## Tech Stack
### Frontend
- **Framework**: React
- **State Management**: Context API / Redux
- **Routing**: React Router
- **Styling**: TailwindCSS / Styled Components

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Authentication**: JWT
- **Security**: CORS, Helmet.js, Rate Limiting

### Database
- **Type**: MongoDB
- **ODM**: Mongoose

---

## Setup Instructions
### Prerequisites
- Node.js (v18+)
- MongoDB (v6+)
- Git
- npm or Yarn

### Installation
1. Clone the repository:
   ```bash
   git clone (https://github.com/Ashwanth-R/NM_Mern_Project_Online_Food_App)
   cd sb-foods
   ```
2. Configuration

   Set Up MongoDB Connection:
  The MongoDB connection string is managed in the server codebase using an environment variable.
  
   Edit `.env` File:
  1. Create a `.env` file in the `server` directory if it doesn't exist.
  2. Add the MongoDB connection string using the variable `DRIVER_LINK`:
  
     ```dotenv
     DRIVER_LINK=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority
     ```
  Replace the placeholders \<username>\, \<password>\, \<cluster-name>\, and \<database-name>\ with your MongoDB credentials and details.
  
3. Install dependencies:
  Frontend:
  ```bash
  cd client
  npm install
  ```
  Backend:
  ```bash
  cd server
  npm install
  ```
3. Running the Application
  Frontend:
  ```bash
    cd client
    npm start
  ```
  Backend:
  ```bash
  cd server
  node index.js
```
---
## Output Demonstration
# Project Outcome Photos

Below are screenshots demonstrating the key features and pages of the project:

## Admin Dashboard
![Admin Dashboard](./Project%20Outcome%20Photos/Admin%20Dashboard.PNG)

## Cart Page
![Cart Page](./Project%20Outcome%20Photos/Cart%20Page.PNG)

## Home Page
![Home Page](./Project%20Outcome%20Photos/Home%20Page.PNG)

## Login Page
![Login Page](./Project%20Outcome%20Photos/Login%20Page.PNG)

## Orders Page
![Orders Page](./Project%20Outcome%20Photos/Orders%20Page.PNG)

## Payment Page
![Payment Page](./Project%20Outcome%20Photos/Payment%20Page.png)

## Register Page
![Register Page](./Project%20Outcome%20Photos/Register%20Page.PNG)

## Restaurant Add Item Page
![Restaurant Add Item Page](./Project%20Outcome%20Photos/Restaurant%20Add%20Item%20Page.PNG)

## Restaurant Approval
![Restaurant Approval](./Project%20Outcome%20Photos/Restaurant%20Approval.PNG)

## Restaurant Dashboard
![Restaurant Dashboard](./Project%20Outcome%20Photos/Restaurant%20Dashboard.PNG)

## Restaurant Menu Page
![Restaurant Menu Page](./Project%20Outcome%20Photos/Restaurant%20Menu%20Page.PNG)

## Restaurant Menu Update
![Restaurant Menu Update](./Project%20Outcome%20Photos/Restaurant%20Menu%20Update.PNG)

## Restaurant Orders Page
![Restaurant Orders Page](./Project%20Outcome%20Photos/Restaurant%20Orders%20Page.PNG)

## Restaurants Page
![Restaurants Page](./Project%20Outcome%20Photos/Restaurants%20Page.PNG)

---
# Future Enhancements
- Real-Time Notifications: Live updates on order status using Socket.io.
- Mobile App: React Native-based extension.
- AI Recommendations: Dish suggestions based on order history.
- Advanced Payment Methods: Integration with Apple Pay and Google Pay.



