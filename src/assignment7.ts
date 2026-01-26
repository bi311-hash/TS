function formatValue(value: string | number) {
    if (typeof value === "string") {
       console.log(value.toUpperCase())
    } else {
        console.log(value);
    }
}
formatValue("hey");
formatValue(101);