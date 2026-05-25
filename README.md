Anytime Trips 🌍✈️

Anytime Trips is a modern full-stack travel booking web application built using React and Django.
The platform allows travelers to explore and book amazing travel packages while travel agencies can manage and publish their own trips.

🚀 Features
👤 Authentication System
JWT Login & Registration
Secure Authentication
Protected Routes
Role-Based Access System
🎒 Traveller Features
Browse Travel Packages
View Trip Details
Add Trips to Cart
Book Trips
Responsive UI
🏢 Agency Features
Create Trips
Update Trips
Delete Trips
Manage Customers & Packages
🎨 Frontend Features
Fully Responsive Design
Modern UI/UX
Mobile Friendly
Smooth Animations
Reusable Components
⚙️ Backend Features
REST API
Role-Based Permissions
Secure Endpoints
Database Integration
Media Upload Support
🛠️ Tech Stack
Frontend
React
JavaScript
HTML5
CSS3
Tailwind CSS
Axios
React Router DOM
Backend
Django
Django REST Framework
JWT Authentication
Database
SQLite
PostgreSQL
Deployment
Render
Vercel
📂 Project Structure
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
⚡ Installation Guide
1️⃣ Clone Repository
git clone https://github.com/your-username/Anytime-Trips.git
2️⃣ Backend Setup
Move to Backend Folder
cd backend
Create Virtual Environment
python -m venv env
Activate Environment
Windows
env\Scripts\activate
Mac/Linux
source env/bin/activate
Install Dependencies
pip install -r requirements.txt
Run Migrations
python manage.py makemigrations
python manage.py migrate
Start Backend Server
python manage.py runserver

Backend will run on:

http://127.0.0.1:8000/
3️⃣ Frontend Setup
Move to Frontend Folder
cd frontend
Install Packages
npm install
Start React App
npm run dev

Frontend will run on:

http://localhost:5173/
🔐 Authentication

This project uses JWT Authentication.

Login Flow
User logs in
Access Token generated
Token stored in frontend
Protected APIs accessed securely
📡 API Endpoints
Authentication APIs
POST   /api/register/
POST   /api/login/
Trip APIs
GET    /api/get_trips/
POST   /api/create_trip/
PUT    /api/update_trip/:id/
DELETE /api/delete_trip/:id/
Cart APIs
POST   /api/add_to_cart/
GET    /api/cart/
📱 Responsive Design

The website is fully responsive and supports:

Mobile Devices
Tablets
Desktop Screens
🌟 Future Improvements
Online Payment Gateway
Booking History
Review & Rating System
Live Chat Support
Wishlist Feature
AI Trip Recommendation
Google Maps Integration
📸 Screenshots
Home Page
Hero Section
Popular Destinations
Featured Trips
Trip Details Page
Trip Information
Pricing
Booking Button
Dashboard
Agency Trip Management
User Booking Management
🤝 Contributing

Contributions are welcome.

Steps:
Fork Repository
Create New Branch
Commit Changes
Push Code
Create Pull Request
📄 License

This project is licensed under the MIT License.

👨‍💻 Developer

Developed by Harsh Kumar

⭐ Support

If you like this project:

Give it a Star ⭐
Fork the Repository 🍴
Share with Friends 🚀
🔥 Project Tagline

“Book your next adventure anytime, anywhere with Anytime Trips.” ✈️🌍
