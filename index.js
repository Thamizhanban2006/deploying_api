require('dotenv').config();

const express = require('express');
const app = express();

const isAdmin = process.env.IS_ADMIN === 'true';

if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}

console.log("IS_ADMIN:", process.env.IS_ADMIN);
console.log("PORT:", process.env.PORT);

app.get('/', (req, res) => {
  if (isAdmin) {
    res.json({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.json({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:${3000}`);
});