

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function(){

    let searchValue = this.value.toLowerCase();

    cards.forEach(card => {

        let title = card.querySelector("h3").textContent.toLowerCase();
        let description = card.querySelector("p").textContent.toLowerCase();
        let tag = card.querySelector(".tag").textContent.toLowerCase();

        if(
            title.includes(searchValue) ||
            description.includes(searchValue) ||
            tag.includes(searchValue)
        ){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});

