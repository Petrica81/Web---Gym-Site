function adaugaUtilizator() {
    let email = document.getElementById('email').value;
    function Validate()
    {
        let regex = /^([a-z\d-]+)@([a-z\d-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
        if (regex.test(email)) {
            if(localStorage.getItem(email)) {
                alert("Contul există deja!");
                return 0;
            }
            return 1;
        }
        else {
            alert("Emailul introdus nu respectă formatul!")
            return 0
        }
    }
    if(Validate()) {
        let utilizator = {
            email: document.getElementById('email').value,
            nume: document.getElementById('nume').value,
            username: document.getElementById('username').value,
            telefon: document.getElementById('telefon').value,
            parola: document.getElementById('parola').value
        }
        localStorage.setItem(email, utilizator['parola']);
        window.open('conectare.html', '_blank');
    }
}


window.onload = ()=>{
    let p = document.createElement("p");
    p.textContent="Proteine GRATIS PRIMA LUNA!!";
    const element = document.getElementById("test");
    element.appendChild(p);

    // eveniment tastatura
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        let culoare = "#"
        for(let i=0;i<6;i++){
            culoare += name;
        } 
        p.style.color = culoare;
      }, false);

    let x = document.getElementById("bicepsst");
    x.addEventListener("click",()=>{alert("Nu ai voie sa atingi")});

    let p2 = document.getElementsByTagName("p");
    p2[0].style.backgroundColor = "#528";
}
