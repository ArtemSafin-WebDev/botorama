import { openAccordeon, closeAccordeon } from './accordeons';

export default function() {
    const calculators = Array.from(document.querySelectorAll('.js-calculator'));

    calculators.forEach(calculator => {
       const inputs = Array.from(calculator.querySelectorAll('input[type="checkbox"]'));
       const priceElement = calculator.querySelector('.calculator__price-amount');
      


       function calculate() {
           const checkedInputs = inputs.filter(input => input.checked);
           const totalValue = checkedInputs.reduce((sum, input) => sum + (+input.value), 0);
           priceElement.textContent = totalValue + '₽';
        //    console.log('Checked inputs', checkedInputs);
        //    console.log('Total value', totalValue);
       }

       calculate();


       inputs.forEach(input => input.addEventListener('change', calculate));
    });
}
