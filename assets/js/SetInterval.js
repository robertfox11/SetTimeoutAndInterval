// The setInterval() method calls a
// function or evaluates an expression at specified intervals( in milliseconds).
// The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
function setInter() {
    setInterval(function() { alert("Esto es SetInterval"); }, 3000);
}