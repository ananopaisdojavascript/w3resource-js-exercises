const camelize = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
  
  console.log(camelize("EquipmentClass name"));
  console.log(camelize("Equipment className"));
  console.log(camelize("equipment class name"));
  console.log(camelize("Equipment Class Name"));