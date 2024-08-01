class Employee{
    constructor(name,salary,leave){
        this.name=name
        this.salary=salary
        this.leave=leave
    }
    details(){
        console.log("name:",this.name);
        console.log("salary",this.salary);
        console.log("leave",this.leave);
    }
    leave(emp){
        if(this.emp>=this.leave){
            this.emp-=this.leave
            console.log("your can take leave:",this.leave);
        }
        else{
            console.log("your leave is reject");
        }
    }
}
class Manager extends Employee{
    constructor(name,salary,leave){
        super(name,salary,leave)   
    }
}
let emp=new Employee("dhruvi",20000,2)
let man=new Manager("khushi",40000,3)
emp.details()
man.details()