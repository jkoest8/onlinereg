const SELCO_ZIP_CODES = ["56007", "55912", "55917", "55918", "55921", "55009", "55923", "55927",
        "55021", "55936", "55939", "55941", "55943", "55944", "55946", "55949",
        "55041", "55947", "55951", "55046", "55954", "55057", "55060", "55963",
        "55964", "55965", "55971", "55066", "55972", "55974", "55976", "55975",
        "55981", "55985", "55987", "55992", "55901", "55902", "55903", "55904", "55905", "55906"];

document.getElementById('checkButton').addEventListener('click', function() {
    const zipInput = document.getElementById('zipInput').value;
    if (SELCO_ZIP_CODES.includes(zipInput)) {
        // ZIP code is in SELCO
        // Generating Barcode Number, replace it with your logic.
        const barcodeNumber = '1101' + Math.floor(100000000000 + Math.random() * 900000000000);
        
        // Generate visual barcode.
        JsBarcode("#barcode", barcodeNumber, {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 40,
            displayValue: true,
        });
        
    } else {
        // ZIP code is not in SELCO
        // Display a message or take any other action.
        alert("ZIP code is not in SELCO");
    }
});
