// const axios = require('axios');

// // Function to clean the object
// const cleanObject = (input) => {
//   let itemsRemovedCount = 0;

//   const clean = (obj) => {
//     for (const key in obj) {
//       if (obj[key] === 'N/A' || obj[key] === '-' || obj[key] === '') {
//         delete obj[key];
//         itemsRemovedCount++;
//       } else if (Array.isArray(obj[key])) {
//         obj[key] = obj[key].filter(item => item !== 'N/A' && item !== '-' && item !== '');
//         itemsRemovedCount += (obj[key].length - 1);
//       } else if (typeof obj[key] === 'object') {
//         clean(obj[key]);
//       }
//     }
//   };

//   clean(input);

//   return { ...input, items_removed: itemsRemovedCount };
// };

// // Perform GET request
// axios.get('https://coderbyte.com/api/challenges/json/json-cleaning')
//   .then(response => {
//     const inputObject = response.data;
//     const cleanedObject = cleanObject(inputObject);
//     console.log(JSON.stringify(cleanedObject, null, 2));
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error.message);
//   });


const axios = require('axios');

axios.get("https://coderbyte.com/api/challenges/json/json-cleaning")
  .then(response => {
    console.log(response.data);

    const result = expectedResult(response.data);
    result["items_removed"] = items_removed;
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(error => {
    console.error("Error:", error);
  });

let items_removed = 0;

function expectedResult(data) {
  for (const key in data) {
    if (data[key] === "N/A" || data[key] === '-' || data[key] === '') {
      delete data[key];
      items_removed += 1;
    } else if (Array.isArray(data[key])) {
      let size = data[key].length;
      data[key] = data[key].filter(item => item !== 'N/A' && item !== '-' && item !== '');
      let newSize = data[key].length;
      items_removed += (size - newSize);
    } else if (typeof data[key] === 'object' && data[key] !== null) {
      expectedResult(data[key]);
    }
  }
  return data;
}