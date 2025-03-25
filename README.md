# Weather App

A modern weather application built with SvelteKit that allows users to check weather conditions for any city. Features include user authentication, real-time weather data, and using the store with runes feature.

## Hosted on vercel

https://svelte-weather-project-q7mwlozwg-jupis-projects-949da12a.vercel.app/

## Features

- User authentication
- Real-time weather data from OpenWeather API
- Responsive design with modern UI
- TypeScript support
- Secure routing

## Prerequisites

- Node.js (v20 or higher)
- npm (v7 or higher)
- OpenWeather API key

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your OpenWeather API key:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```
4. Run SvelteKit sync to ensure all dependencies are properly configured:
   ```bash
   npm run sync
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:5173](http://localhost:5173) in your browser

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run sync` - Sync SvelteKit dependencies and configuration

## Tech Stack

- SvelteKit
- TypeScript
- Vite
- OpenWeather API