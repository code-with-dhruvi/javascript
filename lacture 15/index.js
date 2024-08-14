let users=[];

const handaleData=(e)=>{
    e.preventDefault();

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let number=document.getElementById("number").value;
    let password=document.getElementById("password").value;

    let user={
        name:name,
        email:email,
        number:number,
        password:password
    }

    if(user.name.length<2){
        alert("please enter your name all requied fields")
        return
    }
    else if(user.email == 0){
        alert("please enter your email")
        return
    }
    let regexnumber=/((\+*)((0[ -]*)*|((91 )*))?[6,7,8,9]((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
    let regexpassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    document.getElementById('number').addEventListener("input",()=>{
        let number=document.getElementById("number").value;
       let regexnumber=/((\+*)((0[ -]*)*|((91 )*))?[6,7,8,9]((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
        if(!(regexnumber.test(user.number))){
            alert("invaild number");
            document.getElementById("number").style.border="3px solid red"
        }
        else{
            alert("invaild number").style.border="3px solid green"
        }
    })
    document.getElementById('password').addEventListener("input",()=>{
        let password=document.getElementById("password").value;
        let regexpassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
        if(!regexpassword.test(user.password)){
            alert("invaild password").style.border="3px solid red"
        }
        else{
            document.getElementById("password").style.border="3px solid green"
        }
    })

    users.push(user);
    console.log(users);
    document.getElementById("userData").reset();
}
// debugger
document.getElementById("userData").addEventListener("submit",handaleData);