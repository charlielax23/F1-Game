//F1 Game

//Variable
let car = document.getElementById("carContainer")
let turbo1 = document.getElementById("turbo1")
let turbo2 = document.getElementById("turbo2")

//Keys
let w = document.getElementById("w")
let e = document.getElementById("e")
let a = document.getElementById("a")
let s = document.getElementById("s")
let d = document.getElementById("d")

//DRS Status
let drsStat = document.getElementById("drsStat")
let id = "off"

//Variable
let speed1 = 20
let speed2 = speed1 + 20
let xAxis = 0
let yAxis = 0

//Game Button

//Keydown
document.addEventListener("keydown", function(event){

    //Toggle
    if(event.key == "e"){

        if(drsStat.textContent == "DRS Status: Off"){

            drsStat.textContent = "DRS Status: On"
            drsStat.style.color = "green"
            id = "on"
        }

        else{

            drsStat.textContent = "DRS Status: Off"
            drsStat.style.color = "red"
            id = "off"
        }
    }

    //KeyBoard
    if(event.key == "w"){

        w.style.backgroundColor = "green"
        car.style.transform = "rotate(-90deg)"

        //DRS Toggle
        if(id == "off"){
            yAxis += speed1
            turbo1.style.visibility = "visible"
        }
        else{
            yAxis += speed2
            turbo2.style.visibility = "visible"
            turbo1.style.visibility = "hidden"
        }
    }

    if(event.key == "e"){

        e.style.backgroundColor = "green"
    }

    if(event.key == "a"){

        a.style.backgroundColor = "green"
        car.style.transform = "rotate(-180deg)"

        //DRS Toggle
        if(id == "off"){
            xAxis -= speed1
            turbo1.style.visibility = "visible"

        }
        else{
            xAxis -= speed2
            turbo2.style.visibility = "visible"
            turbo1.style.visibility = "hidden"
        }
    }

    if(event.key == "s"){

        s.style.backgroundColor = "green"
        car.style.transform = "rotate(90deg)"

        //DRS Toggle
        if(id == "off"){
            yAxis -= speed1
            turbo1.style.visibility = "visible"
        }
        else{
            yAxis -= speed2
            turbo2.style.visibility = "visible"
            turbo1.style.visibility = "hidden"
        }
    }

    if(event.key == "d"){

        d.style.backgroundColor = "green"
        car.style.transform = "rotate(0deg)"

        //DRS Toggle
        if(id == "off"){
            xAxis += speed1
            turbo1.style.visibility = "visible"
        }
        else{
            xAxis += speed2
            turbo2.style.visibility = "visible"
            turbo1.style.visibility = "hidden"
        }
    }

    //Movement
    car.style.bottom = `${yAxis}px`
    car.style.left = `${xAxis}px`
})

//Keyup
document.addEventListener("keyup", function(event){

    //Keyboard
    if(event.key == "w"){

        w.style.backgroundColor = "white"
        
        //DRS Toggle
        if(id == "off"){
            turbo1.style.visibility = "hidden"
        }
        else{
            turbo2.style.visibility = "hidden"
        }
    }

    if(event.key == "e"){

        e.style.backgroundColor = "white"
    }

    if(event.key == "a"){

        a.style.backgroundColor = "white"

        //DRS Toggle
        if(id == "off"){
            turbo1.style.visibility = "hidden"
        }
        else{
            turbo2.style.visibility = "hidden"
        }
    }

    if(event.key == "s"){

        s.style.backgroundColor = "white"

        //DRS Toggle
        if(id == "off"){
            turbo1.style.visibility = "hidden"
        }
        else{
            turbo2.style.visibility = "hidden"
        }
    }

    if(event.key == "d"){

        d.style.backgroundColor = "white"

        //DRS Toggle
        if(id == "off"){
            turbo1.style.visibility = "hidden"
        }
        else{
            turbo2.style.visibility = "hidden"
        }
    }
})

//Android Compatibility

//Variable
let intervalId = null

//E
e.addEventListener("touchstart", function(event){

    if(intervalId == null){

        intervalId = setInterval(function(){

            if(drsStat.textContent == "DRS Status: Off"){

                drsStat.textContent = "DRS Status: On"
                drsStat.style.color = "green"
                id = "on"
            }

            else{

                drsStat.textContent = "DRS Status: Off"
                drsStat.style.color = "red"
                id = "off"
            }

            e.style.backgroundColor = "green"
        }, 100)
    }
})

e.addEventListener("touchend", function(event){

    clearInterval(intervalId)

    intervalId = null

    e.style.backgroundColor = "white"
})

//W
w.addEventListener("touchstart", function(event){

    if(intervalId == null){

        intervalId = setInterval(function(){

            w.style.backgroundColor = "green"
            car.style.transform = "rotate(-90deg)"

            //DRS Toggle
            if(id == "off"){
                yAxis += speed1
                turbo1.style.visibility = "visible"
            }
            else{
                yAxis += speed2
                turbo2.style.visibility = "visible"
                turbo1.style.visibility = "hidden"
            }

            //Movement
            car.style.bottom = `${yAxis}px`
            car.style.left = `${xAxis}px`
        }, 100)
    }
})

w.addEventListener("touchend", function(event){

    clearInterval(intervalId)

    intervalId = null

    w.style.backgroundColor = "white"
        
    //DRS Toggle
    if(id == "off"){
        turbo1.style.visibility = "hidden"
    }
    else{
        turbo2.style.visibility = "hidden"
    }
})

//A
a.addEventListener("touchstart", function(event){

    intervalId = setInterval(function(){

        a.style.backgroundColor = "green"
        car.style.transform = "rotate(-180deg)"

        //DRS Toggle
        if(id == "off"){
            xAxis -= speed1
            turbo1.style.visibility = "visible"

        }
        else{
            xAxis -= speed2
            turbo2.style.visibility = "visible"
            turbo1.style.visibility = "hidden"
        }

        //Movement
        car.style.bottom = `${yAxis}px`
        car.style.left = `${xAxis}px`
    }, 100)
})

a.addEventListener("touchend", function(event){

    clearInterval(intervalId)

    intervalId = null

    a.style.backgroundColor = "white"

    //DRS Toggle
    if(id == "off"){
        turbo1.style.visibility = "hidden"
    }
    else{
        turbo2.style.visibility = "hidden"
    }
})

//S
s.addEventListener("touchstart", function(event){

    intervalId = setInterval(function(){

        s.style.backgroundColor = "green"
        car.style.transform = "rotate(90deg)"

        //DRS Toggle
        if(id == "off"){
            yAxis -= speed1
            turbo1.style.visibility = "visible"
        }
        else{
            yAxis -= speed2
            turbo2.style.visibility = "visible"
            turbo1.style.visibility = "hidden"
        }

        //Movement
        car.style.bottom = `${yAxis}px`
        car.style.left = `${xAxis}px`
    }, 100)
})

s.addEventListener("touchend", function(event){

    clearInterval(intervalId)

    intervalId = null

    s.style.backgroundColor = "white"

    //DRS Toggle
    if(id == "off"){
        turbo1.style.visibility = "hidden"
    }
    else{
        turbo2.style.visibility = "hidden"
    }
})

//D
d.addEventListener("touchstart", function(event){

    intervalId = setInterval(function(){

        d.style.backgroundColor = "green"
        car.style.transform = "rotate(0deg)"

        //DRS Toggle
        if(id == "off"){
            xAxis += speed1
            turbo1.style.visibility = "visible"
        }
        else{
            xAxis += speed2
            turbo2.style.visibility = "visible"
            turbo1.style.visibility = "hidden"
        }

        //Movement
        car.style.bottom = `${yAxis}px`
        car.style.left = `${xAxis}px`
    }, 100)
})

d.addEventListener("touchend", function(event){

    clearInterval(intervalId)

    intervalId = null

    d.style.backgroundColor = "white"

    //DRS Toggle
    if(id == "off"){
        turbo1.style.visibility = "hidden"
    }
    else{
        turbo2.style.visibility = "hidden"
    }
})