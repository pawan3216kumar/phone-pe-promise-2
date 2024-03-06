
let btn = document.querySelector(".btn")
let head = document.querySelector("h1")

const paymentStatus = true;


btn.addEventListener("click" , () => {
    myfunction()
})

function myfunction(){

    head.innerText = "Pending"
    head.style.color = "yellow"

    setTimeout(() => {
        head.innerHTML = ""
        return new Promise((res, rej) => {
            if(paymentStatus){
                res("Payment transfer successfull")
                head.innerText = "Payment Successful"
                head.style.color = "green"
            }
            else{
                reject("Payment transfer unsuccessfull")
                head.innerText = "Payment transfer Reject"
                head.style.color = "red"
            }
            
        })    
        }, 4000)
    }
     

