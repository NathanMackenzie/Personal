$( document ).ready(function() {
	
    document.getElementById("bt-res1").onclick = function (){openResModal()}

    document.getElementById("close").onclick = function () {closeResModal()}
});

function openResModal(){
    document.querySelector('.resume-modal').style.display = 'flex';
    //$(".resume-modal").fadeIn();
}

function closeResModal() {
    document.querySelector('.resume-modal').style.display = 'none';
    //$(".resume-modal").fadeOut();
}
