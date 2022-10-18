let a = document.getElementsByClassName("box")[0];
let b = document.getElementsByClassName("box")[1];
let c = document.getElementsByClassName("box")[2];
let d = document.getElementsByClassName("box")[3];
let container = document.querySelector(".container");
let order = [0,0,0,0];
let timeCodingVisits;
let timeCodingClicks;
let workTimerVisits;
let workTimerClicks;
let tributePageVisits;
let tributePageClicks;
let landingPageVisits;
let landingPageClicks;
let visitsA = a.children[2].lastChild;
let clicksA = a.children[3].lastChild;
let visitsB = b.children[2].lastChild;
let clicksB = b.children[3].lastChild;
let visitsC = c.children[2].lastChild;
let clicksC = c.children[3].lastChild;
let visitsD = d.children[2].lastChild;
let clicksD = d.children[3].lastChild;
//let array = [timeCodingVisits,timecoding]

/* FETCH PARA CADA PÁGINA (conteo de visitas por cada página)*/ 

workTimerVisits = 8; // This instead of real fetching
tributePageVisits = 3; // This instead of real fetching
landingPageVisits = 7; // This instead of real fetching

/*

    fetch("https://api.countapi.xyz/get/timecoding/1e68f437-47b2-4799-b0b8-565047137eac")
        .then(res => res.json())
        .then(data => visitsA.textContent = data.value);
        timeCoding = visitsA.textContent;
        console.log(timeCoding)

*/

/* Sorting Boxes */
function sort(visits) {
    order.push(visits);
    if (order.length == 4) {
        order.sort((a,b) => b - a);
        console.log(order)
        console.log(visitsD.textContent,order.indexOf(visitsD.textContent));
        //if (result == 0) {}
        //order.forEach(x => order.indexOf())
        // order.indexOf(order[i]);

        switch(order.indexOf(visitsA.textContent)) {
            case 0:
                a.classList.add("box", "first");
                console.log("first")
                break;
            case 1:
                a.classList.add("box", "second");
                console.log("second")
                break;
            case 2:
                a.classList.add("box", "third");
                console.log("third")
                break;
            case 3:
                a.classList.add("box", "fourth");
                console.log("fourth")
                break;            
        }

        switch(order.indexOf(visitsB.textContent)) {
            case 0:
                b.classList.add("box", "first");
                console.log("first")
                break;
            case 1:
                b.classList.add("box", "second");
                console.log("second")
                break;
            case 2:
                b.classList.add("box", "third");
                console.log("third")
                break;
            case 3:
                b.classList.add("box", "fourth");
                console.log("fourth")
                break;            
        }

        switch(order.indexOf(visitsC.textContent)) {
            case 0:
                c.classList.add("box", "first");
                console.log("first")
                break;
            case 1:
                c.classList.add("box", "second");
                console.log("second")
                break;
            case 2:
                c.classList.add("box", "third");
                console.log("third")
                break;
            case 3:
                c.classList.add("box", "fourth");
                console.log("fourth")
                break;            
        }

        switch(order.indexOf(visitsD.textContent)) {
            case 0:
                d.classList.add("box", "first");
                console.log("first")
                break;
            case 1:
                d.classList.add("box", "second");
                console.log("second")
                break;
            case 2:
                d.classList.add("box", "third");
                console.log("third")
                break;
            case 3:
                d.classList.add("box", "fourth");
                console.log("fourth")
                break;            
        }

        /*
        

        c.classList.add("box", "second");
            b.classList.add("box", "first");
            a.classList.add("box", "fourth");
            d.classList.add("box", "third");


        */
    }
}

setTimeout(() => {
    container.classList.remove("startanimate");
}, 4000);
    
window.onload = () => { setting();}

function setting() {
    setTimeout(() => {
        order = [];
        a.removeAttribute("class");
        b.removeAttribute("class");
        c.removeAttribute("class");
        d.removeAttribute("class");
        /* AJAX */
        /* Coding Time Visits FETCH */ 
        fetch("https://api.countapi.xyz/get/timecoding/1e68f437-47b2-4799-b0b8-565047137eac")
            .then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                return response.json();
            })
            .then(json => {
                visitsA.textContent = json.value;
                if (visitsA.textContent != timeCodingVisits) {
                    visitsA.style.backgroundColor = "gray";
                }
                timeCodingVisits = visitsA.textContent;
                sort(timeCodingVisits);
            })
            .catch((err) => {
                visitsA.textContent = "error, UPDATE!";
                visitsA.style.backgroundColor = "red";
            }); // Fetch ends here

        /* Coding Time Clicks FETCH */ 
        fetch("https://api.countapi.xyz/get/timecoding/602e79b7-ee4d-4454-b611-221b44ae6fac")
            .then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                return response.json();
            })
            .then(json => {
                clicksA.textContent = json.value;
                if (clicksA.textContent != timeCodingClicks) {
                    clicksA.style.backgroundColor = "gray";
                }
                timeCodingClicks = clicksA.textContent;
                sort(timeCodingClicks);
            })
            .catch((err) => {
                clicksA.textContent = "error, UPDATE!";
                clicksA.style.backgroundColor = "red";
            }); // Fetch ends here
        
        /* workTimer Visits FETCH */ 
        fetch("https://api.countapi.xyz/get/worktimer/5af737f5-9260-4f80-b0a4-59cae6d9b58e")
            .then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                return response.json();
            })
            .then(json => {
                visitsB.textContent = "22"; // aqui cambié
                if (visitsB.textContent != workTimerVisits) {
                    visitsB.style.backgroundColor = "gray";
                }
                workTimerVisits = visitsB.textContent;
                sort(workTimerVisits);
            })
            .catch((err) => {
                visitsB.textContent = "error, UPDATE!";
                visitsB.style.backgroundColor = "red";
            }); // Fetch ends here

        /* workTimer Clicks FETCH */ 
        fetch("https://api.countapi.xyz/get/worktimer/6b63ce74-43f1-433e-bdc4-d68d38e601c3")
            .then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                return response.json();
            })
            .then(json => {
                console.log("testing")
                clicksB.textContent = json.value;
                if (clicksB.textContent != workTimerClicks) {
                    clicksB.style.backgroundColor = "gray";
                }
                workTimerClicks = clicksB.textContent;
                sort(workTimerClicks);
            })
            .catch((err) => {
                clicksB.textContent = "error, UPDATE!";
                clicksB.style.backgroundColor = "red";
            }); // Fetch ends here

        /* This is how to sort boxes, but I won't uset it */
        /*
            c.classList.add("box", "second");
            b.classList.add("box", "first");
            a.classList.add("box", "fourth");
            d.classList.add("box", "third");
            */
        }, 500);
}

window.onclick = update;
function update() {
    /* Background set to none for all the visits numbers */
    visitsA.style.backgroundColor = "initial";
    clicksA.style.backgroundColor = "initial";
    
    visitsB.style.backgroundColor = "initial";
    clicksB.style.backgroundColor = "initial";
    
    visitsC.style.backgroundColor = "initial";
    clicksC.style.backgroundColor = "initial";
    
    visitsD.style.backgroundColor = "initial";
    clicksD.style.backgroundColor = "initial";
    
    /* Starts the fade in animation */
    container.classList.add("animation");
    /* The positioning is done here */
    setting();
    setTimeout(() => {
        container.classList.remove("animation");
        
    }, 2000);
    
}

