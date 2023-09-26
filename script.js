let selcoZipCodes = ['56007', '55912', '55009', /*... other zip codes ...*/ ];

function checkZipCode() {
    let zipCode = document.getElementById('zipCode').value;
    let resultDiv = document.getElementById('result');

    if (selcoZipCodes.includes(zipCode)) {
        resultDiv.textContent = "ZIP Code is in SELCO. Generating Barcode...";
        let barcode = generateUniqueBarcode();
        resultDiv.textContent += `Generated Barcode: ${barcode}`;
    } else {
        resultDiv.textContent = "ZIP Code is not in SELCO.";
    }
}

let generatedCodes = [];

function generateUniqueBarcode() {
    let prefix = "1101";
    let newCode;

    do {
        newCode = prefix + Math.floor(100000000 + Math.random() * 900000000);
    } while (generatedCodes.includes(newCode));

    generatedCodes.push(newCode);
    return newCode;
}
