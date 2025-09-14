console.log("Welcome to the Login Page!");

// Example: Simple login function
function login(username, password) {
    // Replace with actual authentication logic
    if (username === "admin" && password === "password123") {
        console.log("Login successful!");
        return true;
    } else {
        console.log("Invalid credentials.");
        return false;
    }
}

// Example usage
login("admin", "password123");