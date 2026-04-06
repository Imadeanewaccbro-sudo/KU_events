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
Run setup.sql in the SQL of phpMyAdmin to create the database
Open a terminal and run:

cd "your-project-folder"
npm install to add the packages for node.js to run the website on local host
Run this line "node server.js" in powershell to start the server

Open your browser and go to:

http://localhost:3000/ku_simple.html and register then go to phpmyadmin and check if the registered data is being stored or not

How to run it for local public servers:

Works on local network too — just replace localhost with your IP. This can be done by opening the html file in notepad and pressing the shortcut ctrl+f and search for fetch and then replace the localhost with your ip address while keeping the :3000
Default MySQL password is blank (XAMPP default)
Made for educational purposes as a college mini project
