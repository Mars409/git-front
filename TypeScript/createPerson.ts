function createPerson(firstName: string, lastName: string, age: number): Person {
    return {
        firstName,
        lastName,
        age,
        greet: function() {
    return "Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.";
}
}
}