function goToPhoto(){
    const radios = document.querySelectorAll('input[name=genero-sou]')

    radios.forEach(radio => {
        if(radio.checked){
            sessionStorage.setItem("profileGender", radio.value)
        }
    })

    window.location.href = "register-photo.html"
}