function Validate()
{
    const email = document.getElementById("email").value;
    const parola = document.getElementById("password").value;
    let regex = /^([a-z\d-]+)@([a-z\d-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (regex.test(email)) {
        if(!localStorage.getItem(email)) {
            alert("Contul nu exista");
        }
        else {
            if(localStorage.getItem(email) !== parola) {
                alert("Parola incorecta!");
            }
            else {
                 window.open('antrenamente.html', '_blank');
            }
        }
    }
    else {
        alert("Emailul introdus este incorect!")
    }
}
