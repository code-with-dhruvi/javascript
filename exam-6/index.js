class book{
    title;
    #author;
    #price;
    #rentalprice;
    #copiesavailable
    constructor(title,author,price,rentalprice,copiesavailable){
        this.title=title
        this.#author=author
        this.#price=price
        this.#rentalprice=rentalprice
        this.#copiesavailable=copiesavailable
    }
    getauthor(){
        return this.#author
    }
    setauthor(author){
        this.#author=author
    }
    getprice(){
        return this.#price
    }
    setprice(price){
        if(price>=0){
            this.#price=price
        }
        else{
            console.log("price positive number.");
        }
    }
    buybook(){
        if(this.#copiesavailable>0){
            this.#copiesavailable--;
            console.log(`copies remaining - ${this.#copiesavailable}`);
        }
        else{
            console.log(`sorry, no available.`);
        }
    }
    rentalbook(){
        if(this.#copiesavailable>0){
            this.#copiesavailable--;
            console.log(`copies remaining - ${this.#copiesavailable}`);
        }
        else{
            console.log(`sorry, no available.`);
        }
    }
    returnbook(){
        this.#copiesavailable++;
        console.log(`copies avilable - ${this.#copiesavailable}`);
    }
    checkavailability() {
        console.log(`copice available - ${this.#copiesavailable}`);
        return this.#copiesavailable;
    }
}
let bookshop=new book("Spare", "J. R. Moehringer", 20, 4, 5)

bookshop.checkavailability();
bookshop.buybook();
bookshop.rentalbook();
bookshop.returnbook();

bookshop.checkavailability();