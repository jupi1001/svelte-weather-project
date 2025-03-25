<script lang="ts">
  import { city, loading, error, weatherData, fetchWeather, weatherSummary } from '../../stores/weatherStore';
  import '../../styles/weather.css';
  import { goto } from '$app/navigation';

  function handleLogout() {
    fetch('/api/logout', { method: 'POST' }).then(() => goto('/'));
  }

  function handleSearch(e: KeyboardEvent) {
    if (e.key === 'Enter') fetchWeather();
  }
</script>

<main>
  <div class="container">
    <div class="header">
      <h1>Weather Forecast</h1>
      <button class="logout-btn" on:click={handleLogout}>Logout</button>
    </div>

    <div class="search-box">
      <input
        type="text"
        bind:value={$city}
        placeholder="Enter city name"
        on:keydown={handleSearch}
      />
      <button on:click={fetchWeather}>Search</button>
    </div>

    {#if $loading}
      <div class="loading">Loading...</div>
    {:else if $error}
      <div class="error">{$error}</div>
    {:else if $weatherData}
      <div class="weather-card">
        <h2>{$weatherSummary}</h2>
        <div class="weather-info">
          <img
            src={`http://openweathermap.org/img/wn/${$weatherData.weather[0].icon}@2x.png`}
            alt={$weatherData.weather[0].description}
          />
          <div class="temperature">{Math.round($weatherData.main.temp)}°C</div>
          <div class="description">{$weatherData.weather[0].description}</div>
        </div>
        <div class="details">
          <div>Humidity: {$weatherData.main.humidity}%</div>
          <div>Wind: {$weatherData.wind.speed} m/s</div>
        </div>
      </div>
    {/if}
  </div>
</main>
