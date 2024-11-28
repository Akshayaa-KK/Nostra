document.getElementById("cancelOffer").addEventListener("click", function () {
    document.getElementById("offerBar").style.display = "none"
})

document.getElementById("menuBar").addEventListener("click", function () {
    document.getElementById("sideNav").style.left = "0"
})

document.getElementById("cancelNav").addEventListener("click", function () {
    document.getElementById("sideNav").style.left = "-50%"
})






var checks = []

var products = document.getElementById("product").getElementsByTagName("div")
var attributes = document.getElementsByName("attributes")

//occasion checks

var summer = document.getElementById("summer")
var party = document.getElementById("party")
var beach = document.getElementById("beach")

//color checks

var red = document.getElementById("red")
var blue = document.getElementById("blue")
var green = document.getElementById("green")
var white = document.getElementById("white")

//arrivals

var _new = document.getElementById("new")
var old = document.getElementById("old")

console.log(checks)

summer.addEventListener("click", function () {
    console.log(event.target.value)
    console.log(summer.checked)
    if (summer.checked) {
        checks.push(event.target.value)
        console.log(checks)
        showChecks()
    }
    if (summer.checked==false) {
        let index=checks.indexOf(event.target.value)
        checks.splice(index,1)
        console.log(checks)
        showChecks()
    }

})
party.addEventListener("click", function () {
    console.log(event.target.value)

    if (party.checked) {
        checks.push(event.target.value)
        console.log(checks)
        showChecks()
    }
    if (party.checked == false) {
        let index=checks.indexOf(event.target.value)
        checks.splice(index,1)
        console.log(checks)
        showChecks()
    }
})
beach.addEventListener("click", function () {
    console.log(event.target.value)

    if (beach.checked) {
        checks.push(event.target.value)
        console.log(checks)
        showChecks()
    }
    if (beach.checked == false) {
        let index=checks.indexOf(event.target.value)
        checks.splice(index,1)
        console.log(checks)
        showChecks()
    }
})
red.addEventListener("click", function () {
    console.log(event.target.value)
    console.log(red.checked)
    if (red.checked) {
        checks.push(event.target.value)
        console.log(checks)
        showChecks()
    }
    if (red.checked == false) {
        let index=checks.indexOf(event.target.value)
        checks.splice(index,1)
        console.log(checks)
        showChecks()
    }

})
blue.addEventListener("click", function () {
    console.log(event.target.value)

    if (blue.checked) {
        checks.push(event.target.value)
        console.log(checks)
        showChecks()
    }
    if (blue.checked == false) {
        let index=checks.indexOf(event.target.value)
        checks.splice(index,1)
        console.log(checks)
        showChecks()
    }

})
green.addEventListener("click", function () {
    console.log(event.target.value)

    if (green.checked) {
        checks.push(event.target.value)
        console.log(checks)
        showChecks()
    }
    if (green.checked == false) {
        let index=checks.indexOf(event.target.value)
        checks.splice(index,1)
        console.log(checks)
        showChecks()
    }

})
white.addEventListener("click", function () {
    console.log(event.target.value)

    if (white.checked) {
        checks.push(event.target.value)
        console.log(checks)
        showChecks()
    }
    if (white.checked == false) {
        let index=checks.indexOf(event.target.value)
        checks.splice(index,1)
        console.log(checks)
        showChecks()
    }

})
_new.addEventListener("click", function () {
    console.log(event.target.value)

    if (_new.checked) {
        checks.push(event.target.value)
        console.log(checks)
        showChecks()
    }
    if (_new.checked == false) {
        let index=checks.indexOf(event.target.value)
        checks.splice(index,1)
        console.log(checks)
        showChecks()
    }

})
old.addEventListener("click", function () {
    console.log(event.target.value)

    if (old.checked) {
        checks.push(event.target.value)
        console.log(checks)
        showChecks()
    }
    if (old.checked == false) {
        let index=checks.indexOf(event.target.value)
        checks.splice(index,1)
        console.log(checks)
        showChecks()
    }

})


function showChecks() {
    if (checks.length > 0) {
        for (var i = 0; i < attributes.length; i++) {
            let text = attributes[i].textContent;
            let atArray = text.split(",");
            let index = 3;
            console.log(atArray)
            atArray.forEach((attr) => {
                index = (!checks.includes(attr)) ? index - 1 : index
            })
            if (index == 0) {
                attributes[i].parentNode.style.display = "none"
            }
            if(index>=1)
            {
                attributes[i].parentNode.style.display = "block"
            }

        }
    }
    if (checks.length == 0) {
        for (var i = 0; i < attributes.length; i++) {
            attributes[i].parentNode.style.display = "block"

        }
    }
}


