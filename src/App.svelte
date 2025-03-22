<script>
  import { onMount } from 'svelte';
  
  let city = '';
  let weatherData = null;
  let loading = false;
  let error = null;
  
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  
  async function getWeather() {
    if (!city) return;
    
    loading = true;
    error = null;
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      weatherData = await response.json();
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  }
</script>

<main>
  <div class="container">
    <h1>Weather Forecast</h1>
    
    <div class="search-box">
      <input
        type="text"
        bind:value={city}
        placeholder="Enter city name"
        on:keydown={(e) => e.key === 'Enter' && getWeather()}
      />
      <button on:click={getWeather}>Search</button>
    </div>

    {#if loading}
      <div class="loading">Loading...</div>
    {:else if error}
      <div class="error">{error}</div>
    {:else if weatherData}
      <div class="weather-card">
        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
        <div class="weather-info">
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <div class="temperature">{Math.round(weatherData.main.temp)}°C</div>
          <div class="description">{weatherData.weather[0].description}</div>
        </div>
        <div class="details">
          <div>Humidity: {weatherData.main.humidity}%</div>
          <div>Wind: {weatherData.wind.speed} m/s</div>
        </div>
      </div>
    {/if}
  </div>
</main>

<style>
  main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #00b4db, #0083b0);
    padding: 20px;
  }

  .container {
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 100%;
  }

  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
  }

  .search-box {
    display: flex;
    gap: 10px;
    margin-bottom: 2rem;
  }

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    padding: 10px 20px;
    background: #0083b0;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
  }

  button:hover {
    background: #006d94;
  }

  .weather-card {
    text-align: center;
  }

  .weather-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
  }

  .temperature {
    font-size: 3rem;
    font-weight: bold;
    color: #333;
  }

  .description {
    text-transform: capitalize;
    color: #666;
    font-size: 1.2rem;
  }

  .details {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    color: #666;
  }

  .loading, .error {
    text-align: center;
    padding: 1rem;
    color: #666;
  }

  .error {
    color: #ff4444;
  }
</style>
