# 1. Deploying a Node.js Application on AWS EC2

This guide explains how to deploy and run the Project-Jake application on an AWS EC2 instance.

#### Clone the Repository
git clone https://github.com/yoabhishekk/Project-Jake.git
cd Project-Jake

#### 2. Install Dependencies
 npm install

#### Run the Application Locally

Start the Vite development server:

npm run dev

The application will be available at:

http://localhost:5173


#### Running on AWS EC2

Start Vite with network access:

npm run dev -- --host 0.0.0.0

You should see output similar to:

VITE v5.x.x ready

Local:   http://localhost:5173/

Network: http://private-ip:5173/

#### Security Group Configuration

Allow inbound traffic on port 5173

#### Access the application using:

http://public-ip:5173
