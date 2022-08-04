const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 54
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 21
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 153
    }
]

const postDisplay = document.getElementById('post')

function getPostItems(){
    for(let post of posts){
        postDisplay.innerHTML += `
                <div class="post__info">
                    <img src="${post.avatar}" class="post__info--avatar">
                    <p class="post__info--name"> ${post.name} <span>${post.location}</span></p>
                </div>
                <img src="${post.post}" class="post__info--photo">
                <div class="post__cta">
                    <button class="post__cta--btn">
                        <img src="images/icon-heart.png" class="cta post__cta--like">
                    </button>
                    <button class="post__cta--btn">
                        <img src="images/icon-comment.png" class="cta post__cta--comment">
                    </button>
                    <button class="post__cta--btn">
                        <img src="images/icon-dm.png" class="cta post__cta--dm">
                    </button>
                </div>
                <p class="post__info--like">${post.likes} likes</p>
                <p class="post__info--comments"><span>${post.username} </span>${post.comment}</p>
                `
    }
}

getPostItems()


