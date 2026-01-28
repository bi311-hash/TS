// The function currently assumes that the input value is of "any" type
// Update the function so that the input value is of "unknown" type
// Use type checking to safely call toUpperCase method

function parse(value: unknown): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return "Invalid Input";
}
console.log(parse("hello"));
console.log(parse(123));
console.log(parse(null));