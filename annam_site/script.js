

document.addEventListener('DOMContentLoaded', function () {
    

    document.getElementById('hello').addEventListener('click', checkHello);

    function checkHello(event) {
        console.log("Checking Hello");
        // Prevent form submission
        event.preventDefault();

        let check_good = JSON.parse(localStorage.getItem("hello_good"))

        if (check_good === true) {
            location.href='hello.html';
            
        } else {
            alert("ENTER THE PASSWORD")
            console.log("BAD PASSWORD");
        }
    }
    
    if (window.location.pathname.includes('murp.html')) {
        console.log("On murp.html");
        
        document.getElementById('submit').addEventListener('click', checkNum);

        function checkNum(event) {
            // Prevent form submission
            event.preventDefault();

            var day = document.getElementById('day').value;
            if (day === '1') {
                console.log("7")
                location.href='days.html#1-1';
            } else if (day === '2') {
                console.log("2")
                location.href= 'days.html#1-2';
               
            } else if (day === '3') {
                console.log("3")
                location.href= 'days.html#1-3';
            } else if (day === '4') {
                
                location.href= 'days.html#1-4';

            } else if(day === '5') {
                location.href= 'days.html#1-5';
            } else if(day === '6') {
                location.href= 'days.html#1-6';
            } else if(day === '7') {
                location.href= 'days.html#1-7'
            } else if(day === '8') {
                location.href= 'days.html#1-8'
            } else if(day === '9') {
                location.href= 'days.html#1-9'
            } else if(day === '10') {
                location.href= 'days.html#1-10'
            }
            

            else {
                console.log("BAD DAY");
            }
        }
    }
}
);

if (window.location.pathname.includes('page.html')) {
    console.log("On page.html");
    
    document.getElementById('submit').addEventListener('click', checkPword);

    function checkPword(event) {
        // Prevent form submission
        event.preventDefault();

        var pwd = document.getElementById('pwd').value;
        console.log(pwd)

        if (pwd === "password") {
            localStorage.setItem("hello_good", "true");
            location.href= 'hello.html'

        }
        else {
            alert("BAD PASSWORD")
            console.log("BAD PASSWORD");
        }
}
}
;




