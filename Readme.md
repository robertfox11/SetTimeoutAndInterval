# Set Time Out And Set Interval
desciptcion Set Time out
The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
description
The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).

The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.

## Getting Started

We create an HTML 5 with two js scripts to reference timeout and set interval

### Prerequisites
We need only visual studio code
## Running the tests

/Set time out realiza una funcion de callback pasando 5 segundos y mostrando el alert
function setTime() {
    setTimeout(function() { alert("Esto es SetTimeOut"); }, 5000);
}

// The setInterval() method calls a
// function or evaluates an expression at specified intervals( in milliseconds).
// The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
function setInter() {
    setInterval(function() { alert("Esto es SetInterval"); }, 3000);
}


