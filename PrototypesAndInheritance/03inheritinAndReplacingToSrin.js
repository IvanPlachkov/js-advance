function personAndTeachers(){ 
class Person {
    constructor(name,email){
        this.name=name;
        this.email = email;
    }
    toString(type = 'Person'){
return `${type}(name: ${this.name}, email: ${this.email})`;
    }
}
class Teacher extends Person {
    constructor(name,email,subject){
        super(name,email);
        this.subject = subject;
    }
    toString(){
        super.toString('Teacher')
        return `Teacher(name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
            }
}
class Student extends Person {
    constructor(name,email,course){
        super(email,name)
        this.course=course;
    }
    toString(){
        super.toString('Student')
        return `Person(name: ${this.name}, email: ${this.email}, course: ${this.course})`;
            }
}
return {
    Person,
    Teacher,
    Student
}
}