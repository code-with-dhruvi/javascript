class student{
    constructor(name,number,grid,email,course,fee){
        this.name=name
        this.number=number
        this.grid=grid
        this.email=email
        this.course=course
        this.fee=fee
    }
    leave(name){
        console.log("you can take leave");
    }
    exam(){

    }
}

let stu=new student("dhruvi",6354848476,4452,"dhruvipipaliya41@gmail.com","backend developer",125000)
let stu1=new student("khushi",625189586,4453,"khushikalsriya42@gmail.com","backend developer",125000)

console.log(stu);
console.log(stu.name);
console.log(stu1);
stu.leave()
stu.exam()