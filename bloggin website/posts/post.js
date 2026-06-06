

const dietPosts = [

{
    title:"High-Protein Bulking Chicken Rice Bowl",
    image:"../images/post1.avif",
    link:"post1.html"
},

{
    title:"power oats bowl",
    image:"../images/post2.png",
    link:"post2.html"
},

{
    title:"Greek Yogurt Berry Protein Bowl",
    image:"../images/post3.avif",
    link:"post3.html"
},

{
    title:"Paneer Egg Power Toast",
    image:"../images/post4.png",
    link:"post4.html"
},

{
    title:"Soya Protein Scramble with Toast",
    image:"../images/post5.jfif",
    link:"post5.html"
}

];

const container =
document.getElementById("popularPosts");

function loadRandomPosts(){

    container.innerHTML="";

    const shuffled =
    [...dietPosts].sort(() =>
    Math.random() - 0.5);

    const selected =
    shuffled.slice(0,3);

    selected.forEach(post => {

        container.innerHTML += `
        
        <a href="${post.link}"
        class="popular-post">

            <img src="${post.image}"
            alt="${post.title}">

            <h4>${post.title}</h4>

        </a>

        `;

    });

}

loadRandomPosts();

/* Change every 1 minute */

setInterval(loadRandomPosts,60000);

