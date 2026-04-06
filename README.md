# 🚀 Full Stack Web Application – VR Recommender

## 📌 Project Overview

This project is a full-stack web application developed to explore and recommend virtual tourism experiences, specifically focused on **Bihar’s historical and cultural locations**.

Initially, the backend was developed using **Node.js and Express**, and later extended by implementing a **Django-based backend** to render dynamic web pages and demonstrate multi-technology backend capabilities.

---

## 🛠️ Tech Stack

### 🎨 Frontend

* HTML
* CSS
* JavaScript

---

### ⚙️ Backend

#### 🔹 Initial Implementation

* Node.js
* Express.js

#### 🔹 Current Implementation

* Python
* Django

---

### 🗄️ Database (Planned)

* MongoDB

---

## 📁 Project Structure

```
fullstack-web-app/
│
├── client/              # Frontend (UI components)
├── server/
│   ├── backend/         # Django backend (current implementation)
│   │   ├── api/         # Django app (views, urls, templates)
│   │   ├── backend/     # Django project settings
│   │   └── manage.py
│   │
│   ├── routes/          # Express routes (initial backend)
│   ├── controllers/     # Express controllers
│   ├── models/          # Express models
│   ├── middleware/      # Express middleware
│   ├── server.js        # Express entry point
│   └── package.json
│
├── database/            # Database configs (planned)
```

---

## 👥 Team Members

* **Aishwarya** – Backend Developer 
* **Creyal** – Backend Developer
* **Pooja** – Frontend Developer
* **Anushka** – Database Designer

---

## 🔄 Development Workflow

* `temp` → Active development (Django implementation)
* `develop` → Stable Node.js backend
* `main` → Final production-ready version

---

## 🚀 Current Status

✅ Node.js backend implemented (basic server)
✅ Django backend integrated
✅ Homepage successfully rendered using Django
✅ UI designed for Bihar VR tourism

---

## 🎯 Key Features

* 🌍 VR Tourism UI focused on Bihar
* ⚡ Django-based homepage rendering
* 🔀 Dual backend architecture (Node + Django)
* 🎨 Responsive and modern UI

---

## 📌 Future Enhancements

* 🔐 Authentication system (Login/Signup)
* 🔗 Connect frontend with backend APIs
* 🗄️ Database integration (MongoDB / Django ORM)
* 🔍 Search & filter locations
* 🚀 Deployment

---

## ⚡ How to Run

### 🔹 Run Django Server

```bash
cd server/backend
python manage.py runserver
```

👉 Open in browser:
http://127.0.0.1:8000/

---

### 🔹 Run Node Server (Optional)

```bash
cd server
npm install
node server.js
```

---

## 📜 License

This project is developed for educational purposes as part of academic coursework.
