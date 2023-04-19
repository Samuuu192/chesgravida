rows = document.querySelectorAll(".row")

document.addEventListener("DOMContentLoaded", function(){
    rows.forEach(row => {
        if((parseInt(row.id)+row.parentElement.id.charCodeAt())%2==0){
            row.classList.add("white")
        } else {
            row.classList.add("black")
        }
    })
})