let selcoZipCodes = ["56007", "55912", "55917", "55918", "55921", "55009", "55923", "55927",
    "55021", "55936", "55939", "55941", "55943", "55944", "55946", "55949",
    "55041", "55947", "55951", "55046", "55954", "55057", "55060", "55963",
    "55964", "55965", "55971", "55066", "55972", "55974", "55976", "55975",
    "55981", "55985", "55987", "55992", "55901", "55902", "55903", "55904", "55905", "55906"];

function checkZipCode() {
    let zipCode = document.getElementById('zipCode').value;

    if (selcoZipCodes.includes(zipCode)) {
        let barcode = generateUniqueBarcode();
        
        // Append barcode as a parameter to the URL
        window.location.href = 'qualified.html?barcode=' + barcode; 
    } else {
        window.location.href = 'notQualified.html';
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
