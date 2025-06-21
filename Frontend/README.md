# Agamify Next.js App

Welcome to the Agamify Next.js application! This project is a web application that utilizes Next.js and NextAuth for authentication with GitHub. It features a basic landing page and a user dashboard with interactive cards.

## Features

- **Authentication**: Users can log in using their GitHub accounts.
- **Dashboard**: After logging in, users are redirected to a dashboard displaying three informative cards.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (version 14 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/agamify-nextjs-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd agamify-nextjs-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Set up your GitHub OAuth application to get the Client ID and Client Secret.
2. Create a `.env.local` file in the root of the project and add the following environment variables:
   ```
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

- Visit the landing page to learn more about Agamify.
- Click on the login button to authenticate with GitHub.
- Once logged in, you will be redirected to your dashboard where you can view your cards.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the LICENSE file for details.