# Employee Task Management - Frontend

Modern, responsive web interface built with pure HTML, CSS, and JavaScript (no frameworks).

---

## Features

- Beautiful UI with gradient design
- Fully Responsive (mobile, tablet, desktop)
- Smooth Animations and transitions
- Real-time Notifications (toast messages)
- No Dependencies - Pure Vanilla JS
- Employee Management interface
- Task Management with priority levels
- Clean Code - Easy to understand and modify

---

## Quick Start

### Method 1: Direct Open (Simplest)
1. Open index.html in your browser
2. Make sure backend is running at http://localhost:8000

### Method 2: Python HTTP Server (Recommended)
cd frontend
python -m http.server 8080

Then open: http://localhost:8080

### Method 3: VS Code Live Server
1. Install "Live Server" extension
2. Right-click index.html
3. Click "Open with Live Server"

---

## File Structure

frontend/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Frontend logic and API calls
└── README.md           # This file

Total Files: 3
Total Dependencies: 0
Total npm packages: 0

---

## Configuration

### Update Backend API URL

Edit script.js (Line 2):
const API_URL = 'http://localhost:8000';

For production:
const API_URL = 'https://your-api.com';

---

## Design Features

### Color Scheme
- Primary Gradient: #667eea to #764ba2 (Purple gradient)
- Cards: White with light gray borders
- Hover Effects: Smooth scaling and shadow
- Badges: Color-coded by priority/status

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Headers: 2.8em bold
- Body Text: 1em regular

### Layout
- Desktop: CSS Grid (auto-fill, 320px minimum)
- Mobile: Single column stack
- Responsive Breakpoint: 768px

### Animations
- Fade-in on page load
- Slide-in on tab switch
- Scale on button hover
- Smooth transitions (0.3s)

---

## Browser Support

Browser    Version
Chrome     90+
Firefox    88+
Safari     14+
Edge       90+

Note: Uses modern ES6+ JavaScript (Fetch API, async/await)

---

## User Guide

### Add Employee
1. Click "Employees" tab
2. Fill form: Name, Email, Department, Position
3. Click "Add Employee"
4. Success notification appears

### Add Task
1. Click "Tasks" tab
2. Fill task title and description
3. Select employee from dropdown
4. Choose priority (Low/Medium/High)
5. Choose status (Pending/In Progress/Completed)
6. Click "Add Task"

### Delete Items
- Click red "Delete" button on any card
- Confirm deletion in popup

---

## Features Breakdown

### Employee Section
- Employee Form (Name, Email, Dept, Position)
- Employee Cards (Grid layout)
- Delete functionality
- Empty state message

### Task Section
- Task Form (Title, Desc, Employee, Priority, Status)
- Task Cards (Grid layout)
- Color-coded badges
- Delete functionality
- Empty state message

### Notifications
- Success messages
- Error messages
- Auto-dismiss (3 seconds)
- Slide-in animation

---

## Troubleshooting

### Problem: Can't connect to backend
Solution:
- Check if backend is running: http://localhost:8000
- Verify API_URL in script.js
- Open browser console (F12) for errors
- Check CORS settings in backend

### Problem: Styles not loading
Solution:
- Ensure all 3 files are in same folder
- Clear browser cache (Ctrl+Shift+Delete)
- Check file path in link tag
- Try different browser

### Problem: Blank page
Solution:
- Open browser console (F12)
- Check for JavaScript errors
- Verify script.js is loading
- Check network tab for failed requests

---

## Customization Guide

### Change Color Theme

Edit styles.css:
/* Change main gradient */
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);

/* Change button color */
button[type="submit"] {
  background: linear-gradient(135deg, #NEW_COLOR1 0%, #NEW_COLOR2 100%);
}

### Change Font

body {
  font-family: 'Your Font Name', sans-serif;
}

### Add New Field

1. Add to HTML form:
<input type="text" id="new-field" placeholder="New Field">

2. Update JavaScript:
const employee = {
  newField: document.getElementById('new-field').value
};

---

## Deployment

### Deploy to Netlify
1. Drag & drop frontend folder to Netlify
2. Update API_URL in script.js to production backend
3. Done

### Deploy to Vercel
cd frontend
vercel deploy

### Deploy with Backend
- Place frontend folder inside backend/
- Backend will serve frontend automatically at /

---

## Code Overview

### index.html (Structure)
- Header section with title
- Tab navigation (Employees/Tasks)
- Two tab contents with forms and lists
- Notification container

### styles.css (Styling)
- CSS Reset
- Container & header styles
- Tab system
- Form styling
- Card grid layout
- Badge system
- Animations & transitions
- Responsive media queries

### script.js (Logic)
- API URL configuration
- Tab switching function
- Load employees function
- Load tasks function
- Add employee handler
- Add task handler
- Delete functions
- Notification system
- Initial page load

---

## Performance

- Load Time: < 1 second
- File Size:
  - HTML: ~3KB
  - CSS: ~6KB
  - JS: ~5KB
- Total: ~14KB (extremely lightweight)

---

## No Build Process Needed

Unlike React, Vue, or Angular projects:
- No npm install
- No package.json
- No webpack/babel
- No build commands
- Just open and run

---

## Developer

Name: Tharun Sridhar
Institution: VIT Vellore
Tech: HTML5, CSS3, Vanilla JavaScript
Philosophy: Keep it simple, no unnecessary frameworks

---

## License

Open source - Free to use and modify for educational purposes
