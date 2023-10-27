# React User Combinations Application

This is an open-source front-end application built with React (Create React App) that works in conjunction with the
Spring Boot User Combinations Application to generate and manage user combinations from groups. It provides a
user-friendly interface to interact with the backend and visualize the generated combinations.

## Getting Started

These instructions will guide you through setting up and running the React application on your local machine.

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js: Download and install Node.js from [here](https://nodejs.org/).
- npm: This comes bundled with Node.js and should be installed automatically.
- A running instance of
  the [Spring Boot User Combinations Application](https://github.com/YegorChevardin/user-groups-combination), which
  provides the backend services.

### Configuration

You will need to configure the front-end application to connect to the backend Spring Boot application. To do this,
follow these steps:

1. Open the `.env` file in the root directory of this React application.
2. Set the `REACT_APP_API_URL` variable to the URL where your backend application is running. For example:

   ```
   REACT_APP_API_URL=http://localhost:8080/api/v1
   ```

3. Save the changes to the `.env` file.

### Build and Run

Follow these steps to get the React application up and running:

1. Clone this repository to your local machine:

2. Navigate to the project directory:

   ```
   cd react-user-combinations
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Start the application:

   ```
   npm start
   ```

The React application will start, and you can access it in your web browser
at [http://localhost:3000](http://localhost:3000). It will interact with the backend Spring Boot application to generate
and manage user combinations. Ensure that your backend application is running and properly configured.
