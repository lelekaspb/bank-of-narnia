function radioSection(creditCards) {
  const form = document.createElement("form");
  form.classList.add("creditcard-filter-form");

  creditCards.forEach((creditCard) => {
    const btn = radioButton(creditCard);
    form.appendChild(btn);
  });

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.className = "creditcard-filter-submit";
  submitBtn.textContent = "apply";

  form.appendChild(submitBtn);
  form.addEventListener("submit", filterByCreditcard);

  return form;
}
