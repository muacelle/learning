function convertHTML(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);  // é possível passar uma função como argumento do replace()!
}
  
console.log(convertHTML("Dolce & Gabbana"));