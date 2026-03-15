// Data Types Practice


// Number 

let a = 12;

let arr = [1,2,3,5,6,7,8,9];  // Same as JS

// IN TS arr 

let arr2: number[] = [1,12,2,34,435,2];

// Tuples 

let tp: [number, string] = [12, "hey"]

//enum 

enum UserRoles{
    ADMIN  = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "superadmin"
}

enum StatusCodes{
    ABANDONED = "abandoned status code",
    NOTFOUND = "not found"
}

StatusCodes.NOTFOUND;

// any 

// let value: number[];     with this we have mentioned that its value will be number in future

let value;  // here if we will not give value or type

let fruitNames: string[];

// NOTE: Always avoid value to be any  

// Unknown 
