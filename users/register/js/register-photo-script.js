function goToEmailAndPassword(){
    window.location.href = "register-email-password.html"
}

const photoPicker = document.getElementById("pick-photo")
const profilePic = document.getElementById("profile-pic")
const proceedBtn = document.getElementById("proceed-button")

if(sessionStorage.getItem("profilePic")){
    profilePic.src = sessionStorage.getItem("profilePic")
    proceedBtn.value = "Próximo    >>"
}

photoPicker.addEventListener("change", function(){
    const file = this.files[0]
    if(file){
        const reader = new FileReader()
        reader.onload = function(event){
            const base64image = event.target.result
            sessionStorage.setItem("profilePic", base64image)
            profilePic.src = base64image
        }

        reader.readAsDataURL(file)
        proceedBtn.value = "Próximo    >>"
    }
})