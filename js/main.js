// ===== BAND FILTER & SEARCH =====

// Get elements
const genreFilter = document.getElementById("genreFilter");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// Get ALL band cards (both types)
const bandCards = document.querySelectorAll(".band-card, .band-card1");

// FUNCTION: Apply filters
function applyFilters() {
  const selectedGenre = genreFilter.value.toLowerCase();
  const searchText = searchInput.value.toLowerCase();

  bandCards.forEach(card => {
    const genre = card.dataset.genre.toLowerCase();
    const cardText = card.innerText.toLowerCase();

    const genreMatch =
      selectedGenre === "all" || genre === selectedGenre;

    const searchMatch =
      cardText.includes(searchText);

    if (genreMatch && searchMatch) {
      card.classList.remove("band-hidden");
    } else {
      card.classList.add("band-hidden");
    }
  });
}

// Genre filter change
genreFilter.addEventListener("change", applyFilters);

// Search button click
searchBtn.addEventListener("click", applyFilters);

// Optional: live search while typing
searchInput.addEventListener("keyup", applyFilters);


// ===== BOOKING FORM =====
document.getElementById("bookingForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Booking request submitted successfully!");
});

function showregister() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
}

function showlogin() {
  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Login successful!");
});

document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Registration successful!");
});





// ===== USER REVIEWS =====
const reviewForm = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");

if (reviewForm && reviewList) {
  reviewForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const rating = document.getElementById("reviewRating").value;
    const text = document.getElementById("reviewText").value;

    // Remove placeholder text
    if (reviewList.innerText.includes("No reviews")) {
      reviewList.innerHTML = "";
    }

    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review-item");

    reviewDiv.innerHTML = `
      <strong>${"⭐".repeat(rating)}</strong>
      <p>${text}</p>
    `;

    reviewList.appendChild(reviewDiv);
    reviewForm.reset();
  });
}

