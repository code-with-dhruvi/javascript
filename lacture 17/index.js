class Account{
    constructor(name,accnumber){
        this.name=name
        this.accnumber=accnumber
        this.balance=0
    }
    deposit(amount){
        this.balance+=amount
    }
    withdraw(amount){
        if(this.balance>=amount){
            this.balance-=amount
            console.log("your current balance is",this.balance);
        }
        else{
            console.log("please doposit money");
        }
    }
    checkbalance(){
        return this.balance
    }
}

class salarryAccount extends Account{
    constructor(name,accnumber){
        super(name,accnumber)
        this.creditcard=50000
    }
    creditcarddeposit(amount){
        let usedAmount=50000-this.creditcard
        if(usedAmount>0&&usedAmount<=amount){
            this.creditcard+=amount
            console.log("cuurent limit",this.creditcard);
        }
        else{
            console.log("error");
        }
    }
    creditcardwithdraw(amount){
        if(this.creditcard>=amount){
            this.creditcard-=amount
            return amount
        }
    }
    checkcreditcardbalance(){
        return this.creditcard
    }
}

let acc=new Account("dhruvi",4662566262)
acc.deposit(5000)
acc.withdraw(1000)
salary.creditcard(100000)
console.log(salary.checkcreditcardbalance());
console.log(acc.checkbalance());