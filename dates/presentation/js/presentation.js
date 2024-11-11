const profilePic = document.getElementById("profile-pic")
const profileName = document.getElementById("profile-name")

if(sessionStorage.getItem("profilePic")){
    profilePic.src = sessionStorage.getItem("profilePic")
}

if(sessionStorage.getItem("profileName")){
    profileName.innerText = sessionStorage.getItem("profileName")
}