<template>
  <div>
    <header class="banner">
      <img src="/DSN_Banner-1.png" alt="Banner Image" class="banner-image" />
      <!-- <div class="banner-content">
        <h1>Welcome to Our News Site</h1>
        <p>Get the latest news and updates from around the world.</p>
      </div> -->
    </header>

    <!-- Other content of your homepage -->
    <!-- Example: -->
    <div class="main-content">
      <!-- Your main content here -->
    </div>
  </div>
</template>
  
  <style scoped>
.banner {
  position: relative;
  text-align: center;
  color: white;

  max-width: 80% !important;
  margin: auto;
}

.banner-image {
  width: 100%;
  max-height: 400px; /* Adjust height as needed */
  object-fit: cover;
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
}

.banner-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.banner-content p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}
</style>
  