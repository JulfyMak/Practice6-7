let formGroups = document.getElementsByClassName("form-group");
let bio = document.getElementById("bio");
let bioCurrentChars = document.querySelector(".bio .current");

for (let el in formGroups) {
    if (formGroups.hasOwnProperty(el)) {
        let field = formGroups[el];
        field.addEventListener('click', ev=>{
            let input = ev.target;
            input.addEventListener('blur', ()=>{
                if (input.value === '') field.classList.remove('active');
            })
            field.classList.add('active');
        })
    }
}

bio.addEventListener('input', ()=>{
    bioCurrentChars.innerHTML = bio.value.length;
});
