const SELCO_ZIP_CODES = new Set([
    "56007", "55912", //... other zip codes
]);

function checkZipCode() {
    const zipCode = document.getElementById('zipCode').value;
    const resultDiv = document.getElementById('result');
    if (SELCO_ZIP_CODES.has(zipCode)) {
        resultDiv.textContent = 'The Zip Code is within SELCO.';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'The Zip Code is NOT within SELCO.';
        resultDiv.style.color = 'red';
    }
}
