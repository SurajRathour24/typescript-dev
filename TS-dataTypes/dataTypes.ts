let num = 12;

// This is what we have commonly used

let arr1 = [1,2,3,4, "User", {"name" : "developer"}]   // Like JS

// For strict type of data

let marks: number[] = [1,2,3,4,5, "Marks"]  // Now this will strictly check


// Tuples

let tp: [string, number] = ["Harsh", 78, "hey"]; 


let names: string[] = ["a", "23", "dev", "New"]


// Enums

enum websiteStatusCode {
    Abandonded = "Abandded status code",
    nodeJs = "Abandded status code",
    JS = "Abandded status code for JS",
}

websiteStatusCode.JS;

// Strings 

let str = "dev";

console.log(str);
