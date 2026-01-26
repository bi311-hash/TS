// Create a User type. Add relevant properties with appropriate types (e.g, firstName, lastName, age, email, isActive), etc.
// Then write a function that takes a User object as a parameter and console.logs their information.

type User = {
    FirstName: string;
    LastName: string;
    age: number;
    email: string;
    isActive: boolean;
};

const UserInfo = (user: User) => {
    console.log("Name: "+ user.FirstName + " " + user.LastName);
    console.log("Age: " + user.age);
    console.log("Email: "+ user.email);
    console.log("Active: "+ user.isActive);
}

UserInfo({
    FirstName: "B",
    LastName: "R",
    age: 18,
    email: "b@g.com",
    isActive: true
});