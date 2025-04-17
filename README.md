# React Weather App

This is a weather application built using React and Vite. It allows users to search for weather information by city name and displays details such as temperature, humidity, and wind speed.

## Features

- **Search Weather by City**: Enter a city name to fetch and display weather data.
- **Weather Details**: Displays temperature, humidity, and wind speed with corresponding icons.
- **Responsive Design**: Optimized for various screen sizes.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **OpenWeatherMap API**: For fetching real-time weather data.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd react-weather-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` to view the application.

### Environment Variables

Create a `.env` file in the root of the project and add your OpenWeatherMap API key:

```
VITE_APP_ID=your_openweathermap_api_key
```

Replace `your_openweathermap_api_key` with your actual API key.

## Project Structure

```
react-weather-app/
├── public/              # Static assets
├── src/                 # Source files
│   ├── assets/          # Images and icons
│   ├── components/      # React components
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json         # Project metadata and dependencies
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## Attribution

The original comic panels used in this project are from the artist Nagano (https://www.instagram.com/ngntrtr00/). They have been modified for parody purposes.

## License

This project is publicly available for viewing and learning purposes but is not licensed for redistribution, modification, or commercial use.
