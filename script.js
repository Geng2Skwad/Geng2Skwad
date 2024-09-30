document.addEventListener('DOMContentLoaded', function() {
    const d = document.getElementById('display');

    function openBMICalculator(event) {
        event.stopImmediatePropagation(); 
        window.open('bmi_calculator.html', '_blank');
    }

    function openUnitConversionCalculator(event) {
        event.stopImmediatePropagation(); 
        window.open('unit_conversion_calculator.html', '_blank');
    }

    document.getElementById('unit-conversion-button').onclick = openUnitConversionCalculator;
    document.getElementById('bmi-button').onclick = openBMICalculator;

    for (let b of document.querySelectorAll('button:not(#bmi-button):not(#unit-conversion-button)')) {
        b.onclick = () => {
            let v = b.textContent;
            if (v === '=') d.value = eval(d.value);
            else if (v === 'C') d.value = ''; 
            else d.value += v; 
        };
    }
});