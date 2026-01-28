interface Assignment {
    id: string;
    title: string;
    description?: string;
    grade: string;
}

// Render the assignment description only if description is provided in the object
// Use conditional rendering to achieve this
// If there is no assignment description provided, it should render "No description available"

const assignmentEvaluation = (assignment: Assignment): void => {
    console.log(`The assignment ${assignment.id} titled "${assignment.title}" has been graded: ${assignment.grade}`);

    if (assignment.description) {
        console.log(`Assignment Description: ${assignment.description}`);
    } else {
        console.log("No description available");
    }
}

assignmentEvaluation({
    id: "A1",
    title:"Physics",
    grade: "A+"
});
assignmentEvaluation({
    id: "R2",
    title:"English",
    description: "Practice more",
    grade: "A+"
});