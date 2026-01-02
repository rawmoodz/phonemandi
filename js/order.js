// ===== ELEMENTS =====
const pickupNearby = document.getElementById("pickup-nearby");
const pickupChauraha = document.getElementById("pickup-chauraha");
const addressBox = document.getElementById("address-box");

const payAdvance = document.getElementById("pay-advance");
const payCOD = document.getElementById("pay-cod");

const upiBox = document.getElementById("upi-box");
const upiName = document.getElementById("upiName");

const proceedBtn = document.getElementById("proceedBtn");
const confirmDetails = document.getElementById("confirmDetails");

// Inputs
const custName = document.getElementById("custName");
const custPhone = document.getElementById("custPhone");

const addr1 = document.getElementById("addr1");
const addr2 = document.getElementById("addr2");
const city = document.getElementById("city");

// ===== INITIAL STATE =====
upiBox.style.display = "block";

// ===== PICKUP LOGIC =====
pickupChauraha.addEventListener("change", () => {
  addressBox.style.display = "none";
});

pickupNearby.addEventListener("change", () => {
  addressBox.style.display = "block";
});

// ===== PAYMENT METHOD LOGIC =====
payAdvance.addEventListener("change", () => {
  upiBox.style.display = "block";
});

payCOD.addEventListener("change", () => {
  upiBox.style.display = "none";
});

// ===== PROCEED VALIDATION =====
proceedBtn.addEventListener("click", () => {

  if (!custName.value.trim()) {
    alert("Please enter your full name");
    custName.focus();
    return;
  }

  if (!custPhone.value.trim()) {
    alert("Please enter your WhatsApp number");
    custPhone.focus();
    return;
  }

  if (pickupNearby.checked) {
    if (!addr1.value.trim() || !addr2.value.trim() || !city.value.trim()) {
      alert("Please complete your pickup address");
      return;
    }
  }

  if (payAdvance.checked) {
    if (!upiName.value.trim()) {
      alert("Please enter your UPI account holder name");
      upiName.focus();
      return;
    }
  }

  if (!confirmDetails.checked) {
    alert("Please confirm that the details provided by you are correct");
    return;
  }

  // ✅ ALL VALID → REDIRECT
  if (payAdvance.checked) {
    window.location.href = "payment.html";
  } else {
    window.location.href = "success.html";
  }
});
