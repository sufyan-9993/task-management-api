ask Management API
A simple RESTful API for managing tasks using Node.js, Express, and MongoDB.

Table of Contents
Installation
Configuration
Running the Application
Running Tests
API Endpoints
Contributing
License
Installation

1. Clone the Repository
git clone https://github.com/sufyan-9993/task-management-api.git

2.Navigate to the Project Directory
cd your-repo-name


3.Install Dependencies
Ensure you have Node.js and npm installed. Then run:
npm install


Configuration
1.Environment Variables

Create a .env file in the root directory of the project with the following content:

PORT=5000  // Port number on which the server will run.
MONGO_URI=mongodb://localhost:27017/taskdb  // MongoDB connection string.


Running the Application
1.Start the Server

npm start
The server will start and listen on the port specified in the .env file (default is 5000).

2.Access the API

Open your browser or API client (like Postman) and navigate to:

http://localhost:5000/tasks


API Endpoints

GET /tasks
Description: Retrieve all tasks with optional pagination, filtering, and sorting.
Query Parameters:
title: Filter by title (string, optional).
status: Filter by status (string, optional).
sortBy: Field to sort by (string, optional).
page: Page number for pagination (integer, default 1).
limit: Number of tasks per page (integer, default 10).

GET /tasks/:id
Description: Retrieve a single task by its ID.
Parameters:
id: The ID of the task to retrieve.

POST /tasks
Description: Create a new task.
Request Body:
title: Title of the task (string, required).
description: Description of the task (string, optional).
status: Status of the task (string, required, e.g., "pending", "in progress", "completed").

PUT /tasks/:id
Description: Update an existing task by its ID.
Parameters:
id: The ID of the task to update.
Request Body:
title: Title of the task (string, optional).
description: Description of the task (string, optional).
status: Status of the task (string, optional).

DELETE /tasks/:id
Description: Delete a task by its ID.
Parameters:
id: The ID of the task to delete.
