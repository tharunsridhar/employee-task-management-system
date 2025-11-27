// API Base URL - Change this to your backend URL
const API_URL = 'http://localhost:8000';

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Tab switching
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(`${tabName}-tab`).classList.add('active');
    event.target.classList.add('active');
    
    if (tabName === 'employees') {
        loadEmployees();
    } else {
        loadTasks();
        loadEmployeesForDropdown();
    }
}

// Load employees
async function loadEmployees() {
    try {
        const response = await fetch(`${API_URL}/employees/`);
        const employees = await response.json();
        
        const list = document.getElementById('employees-list');
        
        if (employees.length === 0) {
            list.innerHTML = '<div class="empty-state"><h3>No employees yet</h3><p>Add your first employee using the form above</p></div>';
            return;
        }
        
        list.innerHTML = employees.map(emp => `
            <div class="item-card">
                <h3>${emp.name}</h3>
                <p><strong>📧 Email:</strong> ${emp.email}</p>
                <p><strong>🏢 Department:</strong> ${emp.department}</p>
                <p><strong>💼 Position:</strong> ${emp.position}</p>
                <p><strong>📅 Created:</strong> ${new Date(emp.created_at).toLocaleDateString()}</p>
                <button class="delete-btn" onclick="deleteEmployee(${emp.id})">🗑️ Delete</button>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading employees:', error);
        showNotification('❌ Failed to load employees');
    }
}

// Load employees for task dropdown
async function loadEmployeesForDropdown() {
    try {
        const response = await fetch(`${API_URL}/employees/`);
        const employees = await response.json();
        
        const select = document.getElementById('task-employee');
        select.innerHTML = '<option value="">Select Employee</option>' + 
            employees.map(emp => `<option value="${emp.id}">${emp.name} - ${emp.position}</option>`).join('');
    } catch (error) {
        console.error('Error loading employees:', error);
    }
}

// Load tasks
async function loadTasks() {
    try {
        const response = await fetch(`${API_URL}/tasks/`);
        const tasks = await response.json();
        
        const list = document.getElementById('tasks-list');
        
        if (tasks.length === 0) {
            list.innerHTML = '<div class="empty-state"><h3>No tasks yet</h3><p>Add your first task using the form above</p></div>';
            return;
        }
        
        list.innerHTML = tasks.map(task => `
            <div class="item-card">
                <h3>${task.title}</h3>
                <p>${task.description || 'No description provided'}</p>
                <p>
                    <span class="badge ${task.status}">${task.status.replace('-', ' ')}</span>
                    <span class="badge ${task.priority}">${task.priority} priority</span>
                </p>
                <p><strong>👤 Employee ID:</strong> ${task.employee_id}</p>
                <p><strong>📅 Created:</strong> ${new Date(task.created_at).toLocaleDateString()}</p>
                <button class="delete-btn" onclick="deleteTask(${task.id})">🗑️ Delete</button>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading tasks:', error);
        showNotification('❌ Failed to load tasks');
    }
}

// Add employee
document.getElementById('employee-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const employee = {
        name: document.getElementById('emp-name').value,
        email: document.getElementById('emp-email').value,
        department: document.getElementById('emp-dept').value,
        position: document.getElementById('emp-position').value
    };
    
    try {
        const response = await fetch(`${API_URL}/employees/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee)
        });
        
        if (response.ok) {
            e.target.reset();
            loadEmployees();
            showNotification('✅ Employee added successfully!');
        } else {
            showNotification('❌ Failed to add employee');
        }
    } catch (error) {
        console.error('Error adding employee:', error);
        showNotification('❌ Failed to add employee');
    }
});

// Add task
document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const task = {
        title: document.getElementById('task-title').value,
        description: document.getElementById('task-desc').value,
        employee_id: parseInt(document.getElementById('task-employee').value),
        priority: document.getElementById('task-priority').value,
        status: document.getElementById('task-status').value
    };
    
    try {
        const response = await fetch(`${API_URL}/tasks/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(task)
        });
        
        if (response.ok) {
            e.target.reset();
            loadTasks();
            showNotification('✅ Task added successfully!');
        } else {
            showNotification('❌ Failed to add task');
        }
    } catch (error) {
        console.error('Error adding task:', error);
        showNotification('❌ Failed to add task');
    }
});

// Delete employee
async function deleteEmployee(id) {
    if (!confirm('Are you sure you want to delete this employee? All associated tasks will remain.')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/employees/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            loadEmployees();
            showNotification('✅ Employee deleted successfully!');
        } else {
            showNotification('❌ Failed to delete employee');
        }
    } catch (error) {
        console.error('Error deleting employee:', error);
        showNotification('❌ Failed to delete employee');
    }
}

// Delete task
async function deleteTask(id) {
    if (!confirm('Are you sure you want to delete this task?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            loadTasks();
            showNotification('✅ Task deleted successfully!');
        } else {
            showNotification('❌ Failed to delete task');
        }
    } catch (error) {
        console.error('Error deleting task:', error);
        showNotification('❌ Failed to delete task');
    }
}

// Initial load
window.addEventListener('DOMContentLoaded', () => {
    loadEmployees();
});
