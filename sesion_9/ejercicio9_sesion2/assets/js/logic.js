function showSecretMessage() {
    document.getElementById('text2').style.display = "block";
}

function hideSecretMessage() {
    document.getElementById('text2').style.display = "none";
}

function expandImage() {
    document.getElementById('imgPacman').addEventListener("click",
        function () {
            this.classList.toggle("expand");
        }
    )
}

function expandText() {
    document.getElementById('text3').addEventListener("dblclick",
        function () { 
            this.classList.toggle("text-large");
        }
    )
}