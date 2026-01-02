// ===== ELEMENTS =====
const pickupNearby = document.getElementById("pickup-nearby");
const pickupChauraha = document.getElementById("pickup-chauraha");
const addressBox = document.getElementById("sell-address-box");
const submitBtn = document.getElementById("sellSubmitBtn");

// Inputs
const brand = document.getElementById("brand");
const model = document.getElementById("model");
const storage = document.getElementById("storage");
const name = document.getElementById("sellerName");
const phone = document.getElementById("sellerPhone");

const addr1 = document.getElementById("addr1");
const addr2 = document.getElementById("addr2");
const city = document.getElementById("city");

// ===== PICKUP LOGIC =====
pickupChauraha.addEventListener("change", () => {
  addressBox.style.display = "none";
});

pickupNearby.addEventListener("change", () => {
  addressBox.style.display = "block";
});

// ===== SUBMIT LOGIC =====
submitBtn.addEventListener("click", () => {

  if (!brand.value.trim()) {
    alert("Please enter phone brand");
    brand.focus();
    return;
  }

  if (!model.value.trim()) {
    alert("Please enter phone model");
    model.focus();
    return;
  }

  if (!storage.value) {
    alert("Please select storage");
    storage.focus();
    return;
  }

  if (!name.value.trim()) {
    alert("Please enter your name");
    name.focus();
    return;
  }

  if (!phone.value.trim()) {
    alert("Please enter your WhatsApp number");
    phone.focus();
    return;
  }

  // Address validation only if nearby pickup
  if (pickupNearby.checked) {
    if (!addr1.value.trim() || !addr2.value.trim() || !city.value.trim()) {
      alert("Please complete your pickup address");
      return;
    }
  }

  // ✅ ALL OK
  window.location.href = "success.html";
});
