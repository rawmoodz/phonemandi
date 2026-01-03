const stockContainer = document.getElementById("stockList");

fetch("https://opensheet.elk.sh/1RuNlHdqB1Lc60pR8rNsU4pxzTCTAozwEycCH8ETnEQU/Sheet1")
  .then(res => res.json())
  .then(data => {
    stockContainer.innerHTML = "";

    data.forEach(phone => {
      if (phone.available === "yes") {
        const div = document.createElement("div");
        div.className = "phone-card";

        let imagesHTML = "";
        ["imagea", "imageb", "imagec", "imaged"].forEach(key => {
          if (phone[key]) {
            imagesHTML += `<img src="${phone[key]}" class="phone-img">`;
          }
        });

        div.innerHTML = `
          ${imagesHTML}
          <h3>${phone.brand} ${phone.model}</h3>
          <p>RAM: ${phone.ram}</p>
          <p>Storage: ${phone.storage}</p>
          <p>Condition: ${phone.condition}</p>
          <p><strong>₹${phone.price}</strong></p>
          <button onclick="buyPhone('${phone.code}')">Buy Now</button>
        `;

        stockContainer.appendChild(div);
      }
    });
  });

function buyPhone(code) {
  localStorage.setItem("selectedPhoneCode", code);
  window.location.href = "order.html";
}
