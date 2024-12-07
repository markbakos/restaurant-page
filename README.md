# Restaurant Application  

Welcome to the **Restaurant Application**! This full-stack web application provides an intuitive interface for customers to place orders, reserve tables, 
and for administrators to manage these requests efficiently. Built with the **MERN stack**, it combines a sleek and responsive frontend with backend to deliver an exceptional user experience.

---

## 🌟 Features  

### **Customer Experience**  
- **Order Food:** Browse a dynamic menu and place food orders seamlessly.  
- **Table Reservations:** Reserve tables with ease for a hassle-free dining experience.

### **Admin Dashboard**  
- **View and Manage Orders:** Track orders filtered by status (Pending, Confirmed, Completed, Cancelled).  
- **Reservation Management:** Access table reservation requests in one place. 

### **Responsive Design**  
- Fully responsive interface for an optimized experience on desktops, tablets, and mobile devices.

---

## 🔧 Tech Stack  

### **Frontend**  
- **ReactJS**: Modular components for a seamless user interface.  
- **TailwindCSS**: Utility-first CSS framework for a visually appealing and responsive design.

### **Backend**  
- **ExpressJS**: RESTful APIs for handling customer and admin requests.  
- **MongoDB**: Database for storing orders, reservations, and customer information.  

### **Deployment**  
- **Render**: Deployed for live access and testing.  

---

## 🚀 Live Demo  

🎉 **Check out the live application**: [Restaurant App](restaurant-page-y9ps.onrender.com)  

---

## 📂 Features Breakdown  

| Feature                       | Description                                                                                         |  
|-------------------------------|-----------------------------------------------------------------------------------------------------|  
| **Dynamic Menu**              | Customers can browse the menu and add items to their order.                                         |  
| **Order Management**          | Orders are displayed by status, allowing the admin to easily manage and update them.               |  
| **Table Reservations**        | Customers can submit table reservation requests directly through the site.                         |  
| **Real-Time Updates**         | Admin actions like confirming or canceling orders dynamically update the database.                 |  
| **Responsive UI**             | Designed for a smooth experience across all devices, from mobile to desktop.                       |  

---

## 🛠️ Getting Started  

### Prerequisites  
- **Node.js**  
- **MongoDB**  

### Installation  

1. Clone the repository:
  ```bash
  git clone https://github.com/markbakos/restaurant-page
  cd restaurant-page
  ```

2. Install dependencies for both frontend and backend:
  ```bash
  cd client  
  npm install  
  cd ../server  
  npm install
  ```

3. Set up environment variables for the backend:
Create a ```.env``` file in the /backend directory with the following:
```bash
MONGO_URI=<your-mongodb-connection-string>  
PORT=5000
```

4. Start the application:
  Backend:
```bash
  cd server
  node app.js
```

  Frontend:
```bash
  cd client
  npm run dev
```

5. Visit the app with the port terminal gives you.

---

## 📜 API Endpoints  

### **Orders**  
| Method | Endpoint         | Description                                  |  
|--------|------------------|----------------------------------------------|  
| GET    | `/api/orders`    | Fetch all orders with optional status filter |  
| POST   | `/api/orders`    | Create a new order                          |  
| PUT    | `/api/orders/:id`| Update an existing order by ID              |  

### **Reservations**  
| Method | Endpoint             | Description                                 |  
|--------|----------------------|---------------------------------------------|  
| GET    | `/api/reservations`  | Fetch all reservations with optional filter |
| PUT    | `/api/reservations/:id`  | Update the reservation by the id |  
| POST   | `/api/reserve`       | Create a new reservation                    |  


