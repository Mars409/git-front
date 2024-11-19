interface Person {
firstName: string
lastName: string
age: number
greet:()=> string
}

function createperson(
    firstName: string,
    lastName: string,
    age: number
    ): Person {
    return {
    firstName,
    lastName,
    age,
    greet: function(){
    return "Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old."
    },
    }
    }
    const person: Person = createPerson('John','Doe',30)
    //VSCode会在这里提供智能提示,如显示person对象的属性和方法。
    console.log(person.greet())
    