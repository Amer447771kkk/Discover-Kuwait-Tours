
    const attractions = {
      towers: {
        name: "Kuwait Towers",
        img: "images/kuwait_towers.jpg",
        desc: "Iconic symbol of modern Kuwait with panoramic views from the observation deck."
      },
      mosque: {
        name: "Grand Mosque",
        img: "images/grand_mosque.jpg",
        desc: "The largest mosque in Kuwait, showcasing stunning Islamic architecture and rich heritage."
      },
      park: {
        name: "Al Shaheed Park",
        img: "images/shaheed_park.jpg",
        desc: "Beautiful urban park featuring museums, gardens, and cultural events."
      },
      souk: {
        name: "Souk Al-Mubarakiya",
        img: "images/souk.jpg",
        desc: "A vibrant traditional market offering spices, textiles, antiques, and street food."
      },
      tower: {
        name: "Liberation Tower",
        img: "images/liberation_tower.jpg",
        desc: "One of the tallest telecommunications towers in the world, symbolizing Kuwait's independence."
      }
    };

    // Attraction Page Functions
    document.getElementById('attraction-select').addEventListener('change', function () {
      const value = this.value;
      const display = document.getElementById('attraction-display');
      const name = document.getElementById('attraction-name');
      const img = document.getElementById('attraction-image');
      const desc = document.getElementById('attraction-description');

      if (value && attractions[value]) {
        name.textContent = attractions[value].name;
        img.src = attractions[value].img;
        img.alt = attractions[value].name;
        img.style.display = 'block';
        desc.textContent = attractions[value].desc;
      } else {
        name.textContent = '';
        img.src = '';
        img.style.display = 'none';
        desc.textContent = '';
      }
    });
 
    // Form Validations In Login or Registration

    function validateBookingForm() {
      const name = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const date = document.getElementById('date').value;
      const people = document.getElementById('people').value;

      if (name === "" || email === "" || date === "" || people < 1) {
        alert("Please fill in all required fields correctly.");
        return false;
      }

      alert("Thank you! Your booking request has been received.");
      return false; // Prevent actual submission for demo
    }


    function loginUser() {
      const email = document.getElementById('loginEmail').value.trim();
      const pass = document.getElementById('loginPassword').value.trim();

      if (email === "" || pass === "") {
        alert("Please enter both email and password.");
        return false;
      }

      alert("Login successful (demo only)");
      return false; // prevent actual submission for demo
    }

    function registerUser() {
      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const pass = document.getElementById('regPassword').value;
      const confirm = document.getElementById('regConfirm').value;

      if (name === "" || email === "" || pass === "" || confirm === "") {
        alert("Please fill in all fields.");
        return false;
      }

      if (pass !== confirm) {
        alert("Passwords do not match.");
        return false;
      }

      alert("Registration successful (demo only)");
      return false;
    }