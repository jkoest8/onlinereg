let selcoZipCodes = ["56007", "55912", "55917", "55918", "55921", "55009", "55923", "55927",
    "55021", "55936", "55939", "55941", "55943", "55944", "55946", "55949",
    "55041", "55947", "55951", "55046", "55954", "55057", "55060", "55963",
    "55964", "55965", "55971", "55066", "55972", "55974", "55976", "55975",
    "55981", "55985", "55987", "55992", "55901", "55902", "55903", "55904", "55905", "55906"];

function checkZipCode() {
    let zipCode = document.getElementById('zipCode').value;
    let resultDiv = document.getElementById('result');

    if (selcoZipCodes.includes(zipCode)) {
        resultDiv.innerHTML = "Your ZIP Code is in SELCO, and you qualify for a digital card! (The patron would then finish the online form.)<br><br>";
        let barcode = generateUniqueBarcode();
        resultDiv.innerHTML += `Thank you for registering for a digital card.<br><br>Your barcode is: ${barcode}<br><br> If you would like to check out physical items from Rochester Public Library, stop in with photo ID and proof of address to upgrade your card!<br><br> Patron could then be emailed their scannable barcode.`;
        
        // Generate the visual barcode here.
        JsBarcode("#barcode", barcode, {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 40,
            displayValue: true,
        });
    } else {
        resultDiv.textContent = "ZIP Code is not in SELCO. Please stop in at the Rochester Public Library to register for a physical or digital card.";
        document.getElementById('barcode').innerHTML = ''; // Clear the previous barcode if exists
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
