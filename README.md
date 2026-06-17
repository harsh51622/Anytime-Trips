# 🌍✈️ Anytime Trips

### Discover, Plan & Book Your Next Adventure

**Anytime Trips** is a modern full-stack travel booking platform built with **React.js**, **Django**, and **Django REST Framework**. The platform enables travelers to explore exciting destinations, book trips seamlessly, and allows travel agencies to manage and publish travel packages through a dedicated dashboard.

---

## 🚀 Features

### 👤 Authentication & Security

* JWT Authentication
* Secure Login & Registration
* Protected Routes
* Role-Based Access Control

### 🎒 Traveller Features

* Browse Travel Packages
* Search & Filter Destinations
* View Detailed Trip Information
* Add Trips to Cart
* Book Travel Packages
* Responsive User Experience

### 🏢 Agency Features

* Create Travel Packages
* Update Existing Trips
* Delete Trips
* Manage Customer Bookings
* Agency Dashboard

### 🎨 Frontend Features

* Fully Responsive Design
* Modern UI/UX
* Mobile-First Approach
* Reusable Components
* Smooth Navigation Experience

### ⚙️ Backend Features

* RESTful APIs
* JWT Authentication
* Role-Based Permissions
* Database Management
* Media Upload Support

---

## 🛠️ Tech Stack

### 🎨 Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Tailwind CSS
* Axios
* React Router DOM

### ⚙️ Backend

* Python
* Django
* Django REST Framework (DRF)
* JWT Authentication

### 🗄️ Database

* SQLite
* PostgreSQL

### 🚀 Deployment & Tools

* Git & GitHub
* Postman
* Vercel
* Render

---

## 📂 Project Structure

```bash
Anytime-Trips/
│
├── backend/
│   ├── home/
│   ├── manage.py
│   ├── requirements.txt
│   └── db.sqlite3
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚡ Installation Guide

### 1️⃣ Clone Repository

```bash
git clone https://github.com/harsh51622/Anytime_Trips.git
cd Anytime_Trips
```

### 2️⃣ Backend Setup

```bash
cd backend

python -m venv env

# Windows
env\Scripts\activate

# Mac/Linux
source env/bin/activate

pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate

python manage.py runserver
```

Backend runs at:

```bash
http://127.0.0.1:8000/
```

### 3️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```bash
http://localhost:5173/
```

---

## 🔐 Authentication

This project uses **JWT Authentication** for secure access.

### Login Flow

1. User logs in
2. JWT Access Token is generated
3. Token is stored securely
4. Protected APIs are accessed using authentication headers

---

## 📡 API Endpoints

### Authentication

```http
POST /api/register/
POST /api/login/
```

### Trips

```http
GET    /api/get_trips/
POST   /api/create_trip/
PUT    /api/update_trip/:id/
DELETE /api/delete_trip/:id/
```

### Cart

```http
POST   /api/add_to_cart/
GET    /api/cart/
```

---

## 🌐 Live Demo

🔗 https://anytime-trips.vercel.app/

---

## 📱 Responsive Design

Optimized for:

✅ Mobile Devices

✅ Tablets

✅ Laptops

✅ Desktop Screens

---

## 🚀 Future Enhancements

* 💳 Online Payment Gateway
* 📜 Booking History
* ⭐ Reviews & Ratings
* 💬 Live Chat Support
* ❤️ Wishlist Feature
* 🤖 AI Travel Recommendations
* 📍 Google Maps Integration

---


## 🤝 Contributing

Contributions are welcome!

1. Fork the Repository
2. Create a New Branch
3. Commit Your Changes
4. Push to GitHub
5. Create a Pull Request

---

## 👨‍💻 Developer

**Harsh Kumar**

🔗 GitHub: [https://github.com/harsh51622](https://github.com/harsh51622/Anytime-Trips.git)

🔗 Live Project:  https://anytime-trips-wefe.vercel.app/

---

## ⭐ Support

If you like this project:

⭐ Star the Repository

🍴 Fork the Project

🚀 Share it with Others

---

### ✈️ Project Tagline

> **"Book your next adventure anytime, anywhere with Anytime Trips."** 🌍
