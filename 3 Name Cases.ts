//Lower Case
let personName: string="Waqas"
console.log("lowercase:", personName.toLowerCase());

//Upper Case
console.log("uppercase:", personName.toLocaleUpperCase());

//Title Case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));