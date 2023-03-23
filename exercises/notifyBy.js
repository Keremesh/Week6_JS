const notifyByEmail = (email) => {
    return `Email sent to: ${email}`;
}

const notifyByText = (phoneNumber) => {
    return `Text sent to: ${phoneNumber}`;
}

const notify = (string, oneFunction) => {
    return oneFunction(string);
}

console.log(notify("hello@gmail.com", notifyByEmail));

console.log(notify("+12345678", notifyByText));
