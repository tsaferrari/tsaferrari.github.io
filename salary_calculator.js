function calculateSalary(event) {
  event.preventDefault();

  const salary = parseFloat(document.getElementById('salary').value);
  const pension = parseFloat(document.getElementById('pension').value) || 0;

  const taxableIncome = salary - pension;
  let taxDeductions = 0;
  let nic = 0;
  
  if (taxableIncome <= 12570) {
    taxDeductions = 0;
  } else if (taxableIncome <= 50270) {
    taxDeductions = (taxableIncome - 12570) * 0.2;
    nic = (taxableIncome - 12576) * 0.12;
  } else if (taxableIncome <= 125140) {
    taxDeductions = (taxableIncome - 50270) * 0.4 + ((50270-12570)*0.2);
    nic = (50270 - 12576) * 0.12 +  (taxableIncome-50270)*0.02;
  } else {
    taxDeductions = (taxableIncome - 150000) * 0.45 + ((50270-12570)*0.2) + ((150000-12570)*0.4);
    nic = (50270 - 12576) * 0.12 +  (taxableIncome-50270)*0.02;
  }
  
  const netSalary = salary - pension - taxDeductions - nic;

  document.getElementById('yearly_gross').innerHTML = `£ ${taxableIncome.toFixed(2)}`;
  document.getElementById('yearly_tax').innerHTML = `£ ${taxDeductions.toFixed(2)}`;
  document.getElementById('yearly_nic').innerHTML = `£ ${nic.toFixed(2)}`;
  document.getElementById('yearly_net').innerHTML = `£ ${netSalary.toFixed(2)}`;

  document.getElementById('monthly_gross').innerHTML = `£ ${(taxableIncome/12).toFixed(2)}`;
  document.getElementById('monthly_tax').innerHTML = `£ ${(taxDeductions/12).toFixed(2)}`;
  document.getElementById('monthly_nic').innerHTML = `£ ${(nic/12).toFixed(2)}`;
  document.getElementById('monthly_net').innerHTML = `£ ${(netSalary/12).toFixed(2)}`;

  document.getElementById('daily_gross').innerHTML = `£ ${(taxableIncome/365).toFixed(2)}`;
  document.getElementById('daily_tax').innerHTML = `£ ${(taxDeductions/365).toFixed(2)}`;
  document.getElementById('daily_nic').innerHTML = `£ ${(nic/365).toFixed(2)}`;
  document.getElementById('daily_net').innerHTML = `£ ${(netSalary/365).toFixed(2)}`;

  document.getElementById("show_text").innerHTML = "Generated salary breakdown in table below!";
}

document.querySelector('form').addEventListener('submit', calculateSalary);
