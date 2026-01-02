// NOTE:
// This works for local/demo use.
// On live hosting, JSON write requires backend.

let stock = [];

// Load existing stock
fetch("data/stock.json")
  .then(res => res.json())
  .then(data => {
    stock = data;
  });

// Elements
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", () => {
  const phone = {
    code: document.getElementById("code").value.trim(),
    brand: document.getElementById("brand").value.trim(),
    model: document.getElementById("model").value.trim(),
    storage: document.getElementById("storage").value.trim(),
    price: document.getElementById("price").value.trim(),
    condition: document.getElementById("condition").value.trim()
  };

  if (!phone.code || !phone.brand || !phone.model || !phone.price) {
    alert("Please fill all required fields");
    return;
  }

  stock.push(phone);
  alert("Phone added (demo mode)");

  console.log("Updated stock:", stock);
});

removeBtn.addEventListener("click", () => {
  const code = document.getElementById("removeCode").value.trim();

  stock = stock.filter(p => p.code !== code);

  alert("Phone removed (demo mode)");
  console.log("Updated stock:", stock);
});
