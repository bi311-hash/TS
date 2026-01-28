// Eliminate runtime null errors

// Add proper types for user
// Handle missing data safely
// Use optional chaining to access nested properties safely

interface Userprofile{
    name?: string;
}
interface User {
    profile?: Userprofile;
}

function getUsername(user: User): string {
    return user.profile?.name?? "Anonymous";
}

console.log(getUsername({}));
console.log(getUsername({profile: {}}));
console.log(getUsername({profile: {name: "B"}}));