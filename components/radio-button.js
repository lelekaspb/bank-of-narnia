function radioButton(creditCard) {
  const input = document.createElement("input");

  let idString = creditCard.replace(" ", "_");
  idString = idString.toLowerCase();

  input.setAttribute("type", "radio");
  input.setAttribute("name", "credit_card_company");
  input.setAttribute("value", creditCard);
  input.setAttribute("id", idString);

  const label = document.createElement("label");
  label.setAttribute("for", idString);
  label.textContent = creditCard;

  const btn = document.createElement("div");
  btn.className = "radio-button";
  btn.appendChild(input);
  btn.appendChild(label);

  return btn;
}
