# 🎨 Employee & Task Management (Frontend)

Responsive web interface built using pure HTML, CSS, and Vanilla JavaScript.

No frameworks. No build tools.

---

## 🚀 Overview

Frontend provides:

- Employee management interface
- Task creation & tracking
- Real-time UI updates
- Priority & status badges
- Toast notifications
- Responsive layout

Communicates with FastAPI backend using Fetch API.

---

## 🛠 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Fetch API

API communication handled in:
:contentReference[oaicite:4]{index=4}  

---

## 📂 Structure

```
frontend/
├── index.html
├── styles.css
├── script.js
└── README.md
```

---

## ▶️ Run Frontend

Option 1:

Open `index.html` directly in browser  
(Backend must be running)

Option 2:

```bash
cd frontend
python -m http.server 8080
```

Open:
```
http://localhost:8080
```

---

## ⚙️ Configuration

Update API URL in `script.js`:

```js
const API_URL = 'http://localhost:8000';
```

For production:
```js
const API_URL = 'https://your-production-api.com';
```

---

## 🎯 Design Features

- Gradient UI
- CSS Grid layout
- Responsive breakpoints
- Animated transitions
- Status & priority badges
- Confirmation dialogs

---

## 👤 Author

Tharun Sridhar
