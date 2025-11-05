<button id="toggleBtn">Show Project Details</button>
<p id="details" style="display: none;">This LED lamp uses PWM control...</p>

<script>
  const button = document.getElementById('toggleBtn');
  const details = document.getElementById('details');

  button.addEventListener('click', () => {
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
  });
</script>
