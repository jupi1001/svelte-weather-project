<script lang="ts">
  import { goto } from '$app/navigation';
  import '../styles/login.css';
  import type { LoginCredentials } from '../types/weather';
  
  let username = '';
  let password = '';
  let error = '';
  
  async function handleSubmit() {
    try {
      const credentials: LoginCredentials = { username, password };
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      
      if (response.ok) {
        goto('/weather');
      } else {
        error = 'Invalid credentials';
      }
    } catch (e) {
      error = 'An error occurred';
    }
  }
</script>

<main>
  <div class="container">
    <h1>Welcome to Weather App</h1>
    <div class="login-form">
      <h2>Login</h2>
      {#if error}
        <div class="error">{error}</div>
      {/if}
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            bind:value={username}
            placeholder="Enter your username"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            bind:value={password}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</main>