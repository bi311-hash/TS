// Create a Person interface with properties like Name, address, age, email, etc.
interface Person {
    name: string;
    address: string;
    age: number;
    email: string;
}
// Extend the Person interface to create a Student interface that includes additional properties like studentID, and yearOfStudy.
interface Student extends Person {
    studentID: string;
    Year: number;
}

// Extend the Person interface to create a Teacher interface that includes additional properties like employeeID, subjectSpecialization, and yearsOfExperience.
interface Teacher extends Person {
    employeeID: string;
    Subject: string;
    Experience: number;
}

 const printPersonDetails = (person: Student | Teacher) => {
    console.log("Name:" + person.name );
    console.log("Address: "+ person.address);
    console.log("Age:"+ person.age);
    console.log("Email: " + person.email);

if ("studentID" in person) {
    console.log("StudentID: " + person.studentID);
    console.log("Year of study: "+ person.Year);
} else {
    console.log("Employee ID :"+ person.employeeID);
    console.log("Subject of specialization" + person.Subject);
    console.log("Years of experience: "+ person.Experience)
    }
}
const student: Student = {
    name: "Capibara",
    address: "Bhaktapur",
    age: 12,
    email: "cap@gmail.com",
    studentID: "101A",
    Year: 1
};

printPersonDetails(student);

const teacher: Teacher = {
    name: "Ms. Capibara",
    address: "Kathmandu",
    age: 12,
    email: "mscap@gmail.com",
    employeeID: "101T",
    Subject: "Mathematics",
    Experience: 10
};

printPersonDetails(teacher);