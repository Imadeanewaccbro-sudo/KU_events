Karnavati University Event Registration Portal
A simple web app built for registering students to university events. Made as a college project using basic web technologies.
What it does

Shows all upcoming KU events for 2025–26
Lets students fill a registration form
Saves their details to a MySQL database
Shows a success popup after registering

Tech used

HTML, CSS, JavaScript – frontend
Node.js + Express – backend server
MySQL – database
XAMPP – to run MySQL locally

How to run it

Open XAMPP and start Apache and MySQL
Run setup.sql in phpMyAdmin to create the database
Open a terminal and run:

cd your-project-folder
npm install
node server.js

Open your browser and go to:

http://localhost:3000/ku_simple.html
Folder structure
├── ku_simple.html    # the website
├── server.js         # backend server
├── setup.sql         # database setup
└── package.json      # node dependencies
Notes

Works on local network too — just replace localhost with your IP
Default MySQL password is blank (XAMPP default)
Made for educational purposes as a college mini project
