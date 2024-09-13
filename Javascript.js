// Function to save data to localStorage
function saveUser(username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || {};
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
}

// Function to validate user login
function validateUser(username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || {};
    return users[username] === password;
}

// Show Login Form
document.getElementById('showLoginButton').addEventListener('click', function() {
    document.querySelector('.loginForm').classList.add('active');
    document.querySelector('.signupForm').classList.remove('active');
    document.getElementById('loginMessage').textContent = '';
    document.getElementById('signupMessage').textContent = '';
});

// Show Signup Form
document.getElementById('showSignupButton').addEventListener('click', function() {
    document.querySelector('.signupForm').classList.add('active');
    document.querySelector('.loginForm').classList.remove('active');
    document.getElementById('loginMessage').textContent = '';
    document.getElementById('signupMessage').textContent = '';
});

// Handle signup button click
document.getElementById('signupButton').addEventListener('click', function() {
    let username = document.getElementById('signupUsername').value;
    let password = document.getElementById('signupPassword').value;

    if (username && password) {
        let users = JSON.parse(localStorage.getItem('users')) || {};
        if (users[username]) {
            document.getElementById('signupMessage').textContent = 'Username already exists';
        } else {
            saveUser(username, password);
            document.getElementById('signupMessage').textContent = 'Account Created Successfully';
        }
    } else {
        document.getElementById('signupMessage').textContent = 'Please enter both username and password';
    }
});

// Handle login button click
document.getElementById('loginButton').addEventListener('click', function() {
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    if (username && password) {
        if (validateUser(username, password)) {
            localStorage.setItem('loggedInUser', username);
            document.getElementById('loginMessage').textContent = 'Login successful';
        } else {
            document.getElementById('loginMessage').textContent = 'Invalid username or password';
        }
    } else {
        document.getElementById('loginMessage').textContent = 'Please enter both username and password';
    }
});

// Initialize the form visibility
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.loginForm').classList.add('active');
    document.querySelector('.signupForm').classList.remove('active');
});
