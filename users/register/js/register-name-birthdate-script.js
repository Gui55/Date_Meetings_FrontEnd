const profileFirstName = document.getElementById("profile-first-name")

function goToRegisterTwo(){
    if(profileFirstName.value.trim()!==""){
        sessionStorage.setItem("profileName", profileFirstName.value)
    }
    window.location.href = "register-gender.html"
}