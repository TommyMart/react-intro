const { type } = require("@testing-library/user-event/dist/type");

// JSON Object
const jsonString = '{"name": "Tom", "age"; 30, "isStudent": true}';

try {
    const jsonObject = JSON.parse(jsonString);
    console.log(jsonObject);
} catch (error) {
    console.error("Invalid JSON string:", error.message);
    // Output: Invalid JSON string: Unexpected token ';', ..."om", "age"; 30, "isS"... is not valid JSON
}



