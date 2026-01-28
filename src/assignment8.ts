// Create a function that takes a status parameter and returns a message based on the status.
// Allow only the following status: "pending", "approved", "rejected"
// Any other value should result in a compile-time error.

// If pending, return "Your application is pending."
// If approved, return "Congratulations! Your application has been approved."
// If rejected, return "We regret to inform you that your application has been rejected."

type Status = "pending" | "approved" | "rejected" ;

function getStatusMessage(status : Status): string {
    switch (status) {
        case "pending":
            return "Your application is pending" ;
        case "approved":
            return "Congratulations! Your application has been approved";
        case "rejected":
            return "We regret to inform you that your application has been rejected";
    }
}

console.log(getStatusMessage("pending"));
console.log(getStatusMessage("approved"));
console.log(getStatusMessage("rejected"));