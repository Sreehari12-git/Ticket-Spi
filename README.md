# TicketsPi

A modern, responsive web application for finding events, tickets, and local stores, built with React and Vite.

## 🚀 Key Features

- **Dynamic Navigation & Portal switching**: Seamless switching between the Tickets/Movie section and the Stores portal using React Router DOM.
- **Location Selector (City Selection)**: An interactive modal allowing users to choose their city (e.g., Indiranagar, Mg Road, Whitefield, Kormangala, Hosur) to filter events and options.
- **Event Showcasing**: Dedicated landing section displaying event notifications, showcases, and quick actions to publish events or change locations.
- **Stores Directory**: A dedicated portal allowing users to filter registered local stores by categories such as Electronics, Fashion, and Grocery.
- **Premium Styling**: Custom Vanilla CSS styled using modern visual practices, clean spacing, hover animations, and a cohesive user interface layout.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Routing**: [React Router DOM 7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Custom Vanilla CSS

## 📁 Project Structure

```
ticketsPi/
├── public/                # Static assets
├── src/
│   ├── assets/            # Local images and design assets
│   ├── Components/        # Reusable React components
│   │   ├── CityModal.jsx  # Interactive city selector modal
│   │   ├── StoreCard.jsx  # Card component for displaying stores
│   │   ├── StoresPage.jsx # Core page for categorized stores directory
│   │   ├── TopStores.jsx  # Container mapping top stores
│   │   └── store.css      # Styling for store pages
│   ├── App.jsx            # Main app container, layout, and router
│   ├── App.css            # Stylesheet for app layout and common components
│   ├── index.css          # Base CSS reset & variables
│   └── main.jsx           # App entry point
├── package.json           # Scripts and dependencies
└── vite.config.js         # Vite configuration
```

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd ticketsPi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To run the development server:
```bash
npm run dev
```

The application will start, typically available at `http://localhost:5174` (or as configured in your network settings).

### Production Build

To build the project for production deployment:
```bash
npm run build
```

This compiles static assets into the `dist/` directory, optimized for hosting.

### Linting

To run ESLint and check for code styling issues:
```bash
npm run lint
```

