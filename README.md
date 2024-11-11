# Fiat to USDC Conversion and Distribution System
This project offers a comprehensive solution for converting fiat to USDC and distributing it. It comprises a Node.js and Express backend, a frontend built with React (using Vite and Tailwind CSS), and a smart contract for blockchain integration. It includes a secure treasury wallet system, transaction monitoring, and a reconciliation mechanism for accurate and dependable operations.

# Table of Contents
System Architecture
Setting Up the Backend
Setting Up the Frontend
Setting Up the Smart Contract
Environment Variables
Running the Project
Folder Structure
API Documentation
Contributing
License

# System Architecture
This system has several core components:

Backend (Node.js & Express): Manages API requests, fiat-to-USDC conversions, treasury wallet operations, and smart contract integration.
Frontend (React with Vite): Provides an interface for users to initiate fiat-to-USDC transactions and view transaction history.
Smart Contract (Solidity): Ensures the secure transfer of USDC to user wallets on the blockchain.
Bank API (Fiat Onramp): Tracks fiat deposits into a designated bank account and triggers the corresponding fiat-to-USDC conversion.
Transaction Monitoring: Tracks transaction success and synchronizes records in the system.
Reconciliation System: Matches fiat deposits with USDC transactions to detect and resolve any discrepancies.

# Setting Up the Backend
Prerequisites
Node.js (version 18 or later)
MongoDB (local or hosted, such as MongoDB Atlas)
API for fiat deposit notifications (via webhook or batch processing)
Ethereum wallet and USDC liquidity pool for transactions
# Install Dependencies
Clone the repository and navigate to the backend directory:

bash
Copy code
git clone https://github.com/your-repo/fiat-usdc-conversion.git
cd fiat-usdc-conversion/backend
Install backend dependencies:

bash
Copy code
npm install

# Environment Variables
Add these environment variables to your .env file:

bash
Copy code
PORT=5000
MONGO_URI=your-mongo-uri
FIAT_API_URL=your-fiat-api-url
USDC_CONTRACT_ADDRESS=your-usdc-contract-address
USDC_WALLET_PRIVATE_KEY=your-usdc-wallet-private-key
Start the Backend
Run the backend server:

bash
Copy code
npm run dev
The server will be available at http://localhost:5000.

Setting Up the Frontend
Prerequisites
Node.js (version 18 or later)
Install Dependencies
Clone the repository and go to the frontend folder:

bash
Copy code
git clone https://github.com/your-repo/fiat-usdc-conversion.git
cd fiat-usdc-conversion/frontend
Install frontend dependencies:

bash
Copy code
npm install
Environment Variables
Create a .env file in the frontend root directory with the following entry:

bash
Copy code
VITE_API_BASE_URL=http://localhost:5000
Start the Frontend
To run the frontend in development mode:

bash
Copy code
npm run dev
The frontend will be accessible at http://localhost:3000.

Setting Up the Smart Contract
Prerequisites
Hardhat (for deploying Solidity contracts)
Ethereum wallet (such as MetaMask)
USDC Token Contract Address (Sepolia or Mainnet)
Install Dependencies
Go to the smart-contract folder:

bash
Copy code
cd smart-contract
Install the required dependencies:

bash
Copy code
npm install
Deploy the Smart Contract
Add your private key and Infura/Alchemy API key to a .env file:

bash
Copy code
PRIVATE_KEY=your-private-key
INFURA_API_KEY=your-infura-api-key
Deploy the smart contract to the Sepolia network (or Mainnet) with Hardhat:

bash
Copy code
npx hardhat run scripts/deploy.js --network sepolia
Running the Project
Start the Backend
Ensure MongoDB is running (locally or on MongoDB Atlas).

Launch the backend API:

bash
Copy code
npm run dev
The backend will be available at http://localhost:5000.

Start the Frontend
Start the frontend server:

bash
Copy code
npm run dev
The frontend will be available at http://localhost:3000.

# Folder Structure
# Backend
bash
Copy code
backend/
│
├── controllers/
│   └── transactionController.js  # Handles transaction processing
│
├── models/
│   └── transactionModel.js       # Defines MongoDB schema for transactions
│
├── routes/
│   └── transactionRoutes.js      # Endpoints for transaction-related actions
│
├── services/
│   └── usdcService.js            # Interacts with the USDC smart contract
│
├── .env                          # Environment variables
├── app.js                        # Main server configuration
├── package.json                  # Lists backend dependencies
└── server.js                     # Starts the server
# Frontend
# bash
Copy code
frontend/
│
├── src/
│   ├── components/
│   │   ├── TransactionForm.jsx   # Form for user transactions
│   │   └── TransactionList.jsx   # Shows transaction history
│   ├── pages/
│   │   └── Home.jsx              # Home page for the conversion system
│   ├── App.jsx                   # Main React component
│   ├── index.css                 # Tailwind CSS styles
│   ├── main.jsx                  # React entry file
│   └── vite.config.js            # Vite configuration
├── .env                          # Environment variables for frontend
├── package.json                  # Frontend dependencies
└── tailwind.config.js            # Tailwind configuration

# API Documentation
Transaction Routes
POST /transaction
Purpose: Starts a fiat-to-USDC conversion.

# Request Body:

json
Copy code
{
  "fiatAmount": "100.00"
}
Response:

json
Copy code
{
  "status": "success",
  "transactionId": "12345"
}
GET /transactions
Purpose: Returns a list of all transactions.

# Response:

json
Copy code
[
  {
    "_id": "12345",
    "fiatAmount": "100.00",
    "status": "completed"
  },
  ...
]
# Contributing
To contribute to this project:

Fork this repository.
Clone your fork.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to your branch (git push origin feature/your-feature).
Submit a pull request.
License
This project is available under the MIT License. See the LICENSE file for details.









