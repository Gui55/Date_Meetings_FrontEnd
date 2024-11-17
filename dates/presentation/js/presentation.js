const profilePic = document.getElementById("profile-pic")
const profileName = document.getElementById("profile-name")

if(sessionStorage.getItem("profilePic")){
    profilePic.src = sessionStorage.getItem("profilePic")
}

if(sessionStorage.getItem("profileName")){
    profileName.innerText = sessionStorage.getItem("profileName")
}

if(sessionStorage.getItem("profileGender")){
    gender = sessionStorage.getItem("profileGender")
    let color = null
    const rootStyles = getComputedStyle(document.documentElement)
    if(gender=='masculino'){
        color = rootStyles.getPropertyValue('--male-blue').trim()
        profilePic.style.borderColor = color
    } else if(gender=='outro'){
        color = rootStyles.getPropertyValue('--other-green').trim()
        profilePic.style.borderColor = color
    }
}

function goToHome(){
    window.location.href = "../../../index.html"
}