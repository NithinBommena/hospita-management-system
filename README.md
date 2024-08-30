<h1>This is the application made for the Hospital Management App.</h1> 

<h2>Backedn will run on:  http://localhost:8080/</h2>
<h2>User/Patient flow will run at http://localhost:3001/</h2>
<h2>Staff flow will run at http://localhost:3000/</h2>

steps to execute:

1. Install Visual code, nodejs, expresss, mongodb
2. Run mongodb using mongod --dbpath /opt/homebrew/var/mongodb - for mac(apple chip)
3. Open terminal in the location where hsptl_bck_.gz is present and run the follwing command to restore the db.
mongorestore --archive=hsptl_bck_.gz --gzip --nsFrom "hospital_mgmt.*" --nsTo "hospital_mgmt.*" --dro
4. Install packages in the folders Backend, online-hospital-management-staff, online-hospital-management-system-main using command : npm i
5. Run backend using npm run start
6. Next run online-hospital-management-staff using npm run start
7. Run this only after you run 5 th step. As it has the dependency of the url where staff is running. Next online-hospital-management-system-main using npm run start
8. Now you can see application running at http://localhost:3001/. 
SignIn using Patient: 
        PatiendId: 115 
        Password: password
9. we can signout and login to staff flow.
    Nurse: ID: 111 Password: Nurse@123
    Doctor: ID: 112 Password: Haswika@122
    Admin: ID: 123 Password: asdf


"# hospita-management-system" 
