# Agamify Next.js App (App Router)

Welcome to the Agamify Next.js application! This project is a web application that utilizes Next.js App Router and NextAuth for authentication with GitHub. It features a landing page and a user dashboard for GitHub repository management.

## Features

- **Modern Architecture**: Built with Next.js App Router for improved routing and layouts
- **Authentication**: Users can log in using their GitHub accounts
- **Dashboard**: After logging in, users can manage their GitHub repositories
- **Repository Management**: Import, view, and delete GitHub repositories
- **GitHub Integration**: Connect with GitHub APIs to fetch user repositories

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (version 16.8 or later)
- npm (Node package manager)
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/agamify.git
   ```

2. Navigate to the Frontend directory:
   ```bash
   cd agamify/Frontend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Set up your GitHub OAuth application to get the Client ID and Client Secret.
2. Copy the `.env.local.example` file to `.env.local` and fill in your environment variables:
   ```
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_random_secret
   DATABASE_URL=your_database_connection_string
   ```

3. Set up the database:
   ```bash
   npm run db:generate
   npm run db:push
   ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

- `app/`: Contains the App Router routes and layouts
  - `api/`: API routes for GitHub integration, repositories, etc.
  - `dashboard/`: Dashboard page for authenticated users
  - `auth.ts`: NextAuth configuration
  - `layout.tsx`: Root layout component
  - `page.tsx`: Home page
- `components/`: Reusable UI components
- `lib/`: Utility functions and database services
- `hooks/`: Custom React hooks
- `prisma/`: Database schema and client
- `public/`: Static assets

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the LICENSE file for details.