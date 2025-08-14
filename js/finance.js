function calculateTax() {
  const incomeInput = document.getElementById('income');
  const resultDiv = document.getElementById('result');
  const income = parseFloat(incomeInput.value);
  if (isNaN(income) || income < 0) {
    resultDiv.innerHTML = ":x: Please enter a valid income amount.";
    return;
  }
  const brackets = [
    { limit: 10000, rate: 0.10 },
    { limit: 30000, rate: 0.15 },
    { limit: 70000, rate: 0.20 },
    { limit: 150000, rate: 0.25 },
    { limit: Infinity, rate: 0.30 }
  ];
  let taxOwed = 0;
  let previousLimit = 0;
  for (let i = 0; i < brackets.length; i++) {
    const { limit, rate } = brackets[i];
    if (income > limit) {
      taxOwed += (limit - previousLimit) * rate;
      previousLimit = limit;
    } else {
      taxOwed += (income - previousLimit) * rate;
      break;
    }
  }
  const netIncome = income - taxOwed;
  resultDiv.innerHTML = `
    💲 <strong>Total Income:</strong> $${income.toFixed(2)}<br>
    📈<strong>Tax Owed:</strong> $${taxOwed.toFixed(2)}<br>
    🧾 <strong>Income After Tax:</strong> $${netIncome.toFixed(2)}
  `;
}











