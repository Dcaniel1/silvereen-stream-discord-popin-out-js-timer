setTimeout(show, 200)

    function show() {
document.getElementById("discord").style.display = "block"
setTimeout(hide, 60000)
    }

function hide() {
    document.getElementById("discord").style.display = "none"
    setTimeout(show, 420000)
}
