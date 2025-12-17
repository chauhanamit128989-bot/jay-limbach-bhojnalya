const upiInfo = document.getElementById("upiInfo");
upiInfo.style.display = "none";

document.querySelectorAll('input[name="payment"]').forEach(radio=>{
  radio.addEventListener("change",()=>{
    upiInfo.style.display =
      radio.value === "UPI Payment" ? "block" : "none";
  });
});

document.getElementById("orderForm").addEventListener("submit",function(e){
  e.preventDefault();

  const name = custName.value;
  const phone = custPhone.value;
  const item = orderItem.value;
  const qty = orderQty.value;
  const note = orderNote.value;
  const pay = document.querySelector('input[name="payment"]:checked').value;

  const msg =
`🛒 New Order
Name: ${name}
Phone: ${phone}
Item: ${item}
Qty: ${qty}
Payment: ${pay}
Note: ${note}`;

  const url = "https://wa.me/918469217638?text=" + encodeURIComponent(msg);
  window.open(url,"_blank");
});
