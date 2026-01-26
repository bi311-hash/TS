function sendEmail(to: string, subject: string, cc: string = " ") { // default
    console.log(to, subject, cc.toLowerCase());
}
sendEmail("user@gmail.com", "Philosophy");


// expected 3 arguments but got 1 so to solve this issue we can add optional parameter or a default paramater
// or simply just call 3 arguments
// can not do optional to cc because it is defined by string | undefined and when not provided using .toLowerCase brings error

// if we do want to make cc optional

// function sendEmail(to: string, subject: string, cc?: string) {
//     if (cc !== undefined) {
//     console.log(to, subject, cc.toLowerCase());
//     } else {
//             console.log(to, subject);

//     }
// }

// sendEmail("b@gmail.com", "Music")