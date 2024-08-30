

# Hospital Management Application
The Hospital Management Application is a comprehensive solution designed to facilitate the seamless management of hospital operations through dedicated portals for staff and patients. The application is divided into two main websites:

Staff Portal (for Nurses, Doctors, and Admins)
User Portal (for Patients).

### Staff Portal

The staff portal is an all-in-one dashboard that caters to the needs of hospital staff, including nurses, doctors, and administrators. This portal provides a centralized dashboard where staff members can:

- Monitor Active Patients: Track the number of active patients in the hospital in real-time.
- Manage Bed Availability: View the availability of hospital beds, ensuring efficient patient accommodation.
- Access Patient Records: Quickly access detailed patient records to provide timely and informed care.
- Admin Controls: Administrators have additional capabilities to manage hospital resources, staff assignments, and other critical operations.


### User Portal
The user portal is designed for patients, allowing them to:

- View Personal Health Information: Patients can securely log in to view their health records, upcoming appointments, and treatment history.
- Communicate with Healthcare Providers: Patients can interact with their assigned healthcare providers for follow-ups and consultations.
- Manage Appointments: Patients can schedule, reschedule, or cancel appointments based on their convenience.
- Both portals are built with ease of use in mind, ensuring that hospital staff can efficiently manage their duties while patients can easily access the healthcare services they need.

## Application URLs

- **Backend**: Runs at [http://localhost:8080/](http://localhost:8080/)
- **User/Patient Flow**: Accessible at [http://localhost:3001/](http://localhost:3001/)
- **Staff Flow**: Accessible at [http://localhost:3000/](http://localhost:3000/)

## Steps to Execute

### 1. Install Prerequisites
Ensure the following are installed on your system:
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

### 2. Run MongoDB
For macOS (Apple chip), run the following command to start MongoDB:

```bash
mongod --dbpath /opt/homebrew/var/mongodb
```

### 3. Restore Database
Open a terminal in the directory where `hsptl_bck_.gz` is located and run the following command to restore the database:

```bash
mongorestore --archive=hsptl_bck_.gz --gzip --nsFrom "hospital_mgmt." --nsTo "hospital_mgmt." --drop
```

### 4. Install Dependencies
Navigate to the following directories and install the required packages:

- **Backend**:
  ```bash
  cd Backend
  npm install
  ```

- **Staff Flow** (`online-hospital-management-staff`):
  ```bash
  cd online-hospital-management-staff
  npm install
  ```

- **Patient Flow** (`online-hospital-management-system-main`):
  ```bash
  cd online-hospital-management-system-main
  npm install
  ```

### 5. Run Backend
Navigate to the `Backend` directory and start the backend:

```bash
npm run start
```

### 6. Run Staff Flow
Navigate to the `online-hospital-management-staff` directory and start the staff flow:

```bash
npm run start
```

### 7. Run Patient Flow
Navigate to the `online-hospital-management-system-main` directory and start the patient flow. Ensure the staff flow is running as the patient flow has a dependency on it:

```bash
npm run start
```

### 8. Access the Application
The application is now running at [http://localhost:3001/](http://localhost:3001/). You can sign in using the following credentials:

- **Patient**:  
  - ID: `115`  
  - Password: `password`

You can sign out and log in to the staff flow with the following credentials:

- **Nurse**:  
  - ID: `111`  
  - Password: `Nurse@123`

- **Doctor**:  
  - ID: `112`  
  - Password: `Haswika@122`

- **Admin**:  
  - ID: `123`  
  - Password: `asdf`

