# 🛍️ Exclusive E-Commerce Web App

**Exclusive** is a modern full-stack e-commerce web application that allows users to browse, search, and purchase products across multiple categories.

Users can **create an account**, **log in securely**, **add or remove items from their cart and favorites**, and **manage their personal profiles**.  
The platform provides a smooth shopping experience with **real-time data synchronization** between frontend and backend, and **responsive design** for all devices.

---

## 🚀 Live Demo
🔗 **[View Demo](https://exclusive-frontend-tau.vercel.app/)**

---

## 🧩 Features
- User authentication (JWT-based login & register)
- Add/remove products to cart and favorites
- Quantity control with real-time updates
- Search and filter products by category
- Responsive design using Tailwind CSS
- Toast notifications and loading states
- Integration with secure backend API

---

## 🖥️ Frontend
Built with **React.js** and **TypeScript**, using **Redux Toolkit** and **React Query** for global state management and server data synchronization.

**Tech Stack:**
- React.js  
- Redux Toolkit  
- React Query  
- TypeScript  
- Tailwind CSS  
- Vite  

📂 **Folder:** `/frontend`

---

## ⚙️ Backend
The backend is powered by **Node.js** and **Express.js**, with **MongoDB** as the database and **JWT** for authentication.

**Tech Stack:**
- Node.js  
- Express.js  
- MongoDB & Mongoose  
- JWT Authentication  
- bcrypt  
- dotenv  
- CORS  

📂 **Folder:** `/backend`

---

## 🔑 Environment Variables
Both frontend and backend use `.env` files for configuration.

### **Backend .env Example**
```env
PORT=5000
JWT_SECRET=your_secret_key
DB_USERNAME=your_mongodb_username
DB_PASSWORD=your_mongodb_password
```

### **Frontend .env Example
```env
VITE_API=https://exclusive-backend-your-deployment.vercel.app
```
________________

## Project Structure

```
Exclusive/
│
├── backend/              # Express + MongoDB API
├── frontend/             # React + Vite frontend
└── README.md             # Project documentation
```

## 👨‍💻 Developer

**Developed by [Abdalla Elhagar](https://github.com/Abdalla-Elhagar)**  
Full-stack **MERN Developer** | Passionate about **clean UI**, **modern web architecture**, and **building seamless user experiences**.
