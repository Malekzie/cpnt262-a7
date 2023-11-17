<script>
  export let year = new Date().getFullYear();
</script>
<footer class="py-4 border-t border-solid text-token bg-surface-600-900-token">
  <div class="container px-4 mx-auto">
    <div class="flex justify-between mt-5">
      <div>
        <h3>Contact Us</h3>
        <p>Email: info@mywebsite.com</p>
        <p>Phone: 555-555-5555</p>
      </div>
      <div>
        <h3>Location</h3>
        <p>123 Main St.</p>
        <p>Anytown, USA</p>
      </div>
      <div>
        <h3>Hours of Operation</h3>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Saturday: 10am - 4pm</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
    <p class="text-center">&copy; {year} Dragon Sanctuary</p>
  </div>
</footer>