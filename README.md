# ManagementDashboard

This project is a data management system designed to manage information related to students, teachers, classrooms, and grades. It is built using **Next.js**, **TypeScript**, **Prisma**, **Docker**, and **PostgreSQL** to provide an easy-to-use and efficient solution. This dashboard allows you to manage essential educational data such as class assignments, teacher assignments, student records, and grades.

## Technologies Used

- **Next.js**: A React framework for building fast and flexible web applications
- **TypeScript**: A typed superset of JavaScript that improves code quality and maintainability
- **Prisma**: ORM for connecting and managing PostgreSQL databases
- **Docker**: Containerization tool for running both the application and the PostgreSQL database
- **PostgreSQL**: Relational database management system (RDBMS)

## Getting Started

To get this project up and running on your local machine, follow these steps:

### 1. Clone the Repository

Clone the repository to your local machine:

### 2. Install Dependencies
Install the required dependencies for the project:
npm install


### 3. Set Up PostgreSQL and Prisma
You will need to install PostgreSQL and run it inside a Docker container. Set up the Prisma schema with the following command:
npx prisma migrate dev --schema

### 4. Docker Setup
This project uses Docker to manage both the PostgreSQL database and the application. Run the following command to build and start the containers:
docker-compose up --build -d
Ensure that the following ports are open:
Port 5432 for PostgreSQL
Port 3000 for the Next.js application

### 5. Run the Application
Once the containers are set up and running, open the project in your browser:
http://localhost:3000

### Using the System
You can now interact with the system by visiting the URL above. To manage the data, you can add and update the following entities:
Class
Teacher
Student

### Deployment
This project can be deployed to various cloud platforms such as:
AWS EC2: Deploy the application to an EC2 instance.
Docker: Use Docker to run the application and PostgreSQL database locally or in any cloud environment.
Oracle Cloud: Deploy the project using Oracle Cloud's Free Tier.
Follow the respective cloud platform documentation for detailed deployment steps.

