// story data goes here 
const storyData = [
    {
        image: "icons/user.jpg",
        name: "Your Story",
        content: 'story/user.mp4',
        storyTime: '11h'
    },
    {
        image: "stories/naveen.jpg",
        name: "here_is_naveen_",
        content: 'story/naveen.mp4',
        storyTime: '12h'
    },
    {
        image: "stories/rdj.jpg",
        name: "robertdowneyjr",
        content: 'story/rdj.mp4',
        storyTime: '3h'
    },
    {
        image: "stories/ian.jpg",
        name: "iansomerhalder",
        content: 'story/ian.mp4',
        storyTime: '5h'
    },
    {
        image: "stories/joseph.jpg",
        name: "therealjoseph",
        content: 'story/joseph.mp4',
        storyTime: '10h'
    },
    {
        image: "stories/tom.jpg",
        name: "tom_ellis_",
        content: 'story/tom.mp4',
        storyTime: '19h'
    },
    {
        image: "stories/paul.jpg",
        name: "paulwesley",
        content: 'story/paul.mp4',
        storyTime: '15h'
    },
    {
        image: "stories/marvel.jpg",
        name: "marvelstudios",
        content: 'story/marvel.mp4',
        storyTime: '13h'
    },
    {
        image: "stories/chris.jpg",
        name: "chrishemsworth",
        content: 'story/chris.mp4',
        storyTime: '12h'
    },
    {
        image: "stories/netflix.jpg",
        name: "Netflix",
        content: 'story/netflix.mp4',
        storyTime: '24h'
    },
    {
        image: "stories/amazon.jpg",
        name: "amazonprime",
        content: 'story/amazon.mp4',
        storyTime: '11h'
    },
];

//story making function goes here
function storyCreate(value) {
    let story = document.getElementById('story');
    let storyItem = document.createElement('div');
    storyItem.classList.add('box');
    storyItem.innerHTML = `<div class="image-container">
                              <img src="${storyData[value].image}">
                          </div>
                          <div class="user-name">${storyData[value].name}</div>`
    story.appendChild(storyItem);
}

// post data goes here 
const postData = [
    {
        imageIcon: 'icons/user.jpg',
        name: 'pandatboyy',
        postImage: 'posts/pandat.jpg',
        likes: '10,952,764 likes',
        caption: 'Just setting up my instagram 🙂😎.',
        views: 'View all 44,980 comments',
        postTime: '15 May 2021'
    },
    {
        imageIcon: 'stories/naveen.jpg',
        name: 'here_is_naveen_',
        postImage: 'posts/naveen.jpg',
        likes: '9,952,764 likes',
        caption: 'Thinking about <strong>errors</strong> & <strong>bugs</strong>🤔.',
        views: 'View all 4,993 comments',
        postTime: '8 August 2021'
    },
    {
        imageIcon: 'stories/rishu.jpg',
        name: 'rishurathore78',
        postImage: 'posts/rishu.jpg',
        likes: '19,952,764 likes',
        caption: 'Be the reason someone smiles today.”😊😊😘',
        views: 'View all 40,993 comments',
        postTime: '18 MAY 2021'
    },
    {
        imageIcon: 'stories/ian.jpg',
        name: 'iansomerhalder',
        postImage: 'posts/ian.jpg',
        likes: '52,764 likes',
        caption: 'I know you are obsessed with me 😘.',
        views: 'View all 4,520 comments',
        postTime: '8 December 2021'
    },
    {
        imageIcon: 'stories/joseph.jpg',
        name: 'therealjoseph',
        postImage: 'posts/joseph.jpg',
        likes: '23,064 likes',
        caption: "Yoy've heard of me?...Fantastic 😈",
        views: 'View all 3,128 comments',
        postTime: '16 May 2021'
    },
    {
        imageIcon: 'stories/rdj.jpg',
        name: 'robertdowneyjr',
        postImage: 'posts/rdj.jpg',
        likes: '12,345,764 likes',
        caption: 'I Am... Iron Man 😉😎.',
        views: 'View all 7,328 comments',
        postTime: '4 April 2021'
    },
    {
        imageIcon: 'stories/chris.jpg',
        name: 'chrishemsworth',
        postImage: 'posts/chris.jpg',
        likes: '1,232,764 likes',
        caption: 'I am thor god of thunder ⚡⚡⚡.',
        views: 'View all 1,068 comments',
        postTime: '11 August 2021'
    },
    {
        imageIcon: 'stories/paul.jpg',
        name: 'paulwesley',
        postImage: 'posts/paul.jpg',
        likes: '92,764 likes',
        caption: 'To beat the villain 🦹‍♂️. you have to be the better villain 😈.',
        views: 'View all 12,068 comments',
        postTime: '23 July 2021'
    },
    {
        imageIcon: 'stories/tom.jpg',
        name: 'tom_ellis_',
        postImage: 'posts/tom.jpg',
        likes: '9,212,764 likes',
        caption: 'I am a Devil of my Word 😈',
        views: 'View all 71,328 comments',
        postTime: '17 November 2021'
    },
    {
        imageIcon: 'stories/marvel.jpg',
        name: 'marvelstudios',
        postImage: 'posts/marvel.jpg',
        likes: '99,764 likes',
        caption: 'Let the fun begin',
        views: 'View all 31,028 comments',
        postTime: '1 May 2021'
    },
    {
        imageIcon: 'stories/netflix.jpg',
        name: 'Netflix',
        postImage: 'posts/netflix.jpg',
        likes: '120,564 likes',
        caption: 'Lucifer season 6 is out September 10 on Netflix worldwide.',
        views: 'View all 10,328 comments',
        postTime: '10 September 2021'
    },
    {
        imageIcon: 'stories/amazon.jpg',
        name: 'amazonprime',
        postImage: 'posts/the boys.jpg',
        likes: '9,782,764 likes',
        caption: "A stranger is just a friend you ain't met yet.",
        views: 'View all 1,397 comments',
        postTime: '13 November 2021'
    },
    {
        imageIcon: 'stories/marvel.jpg',
        name: 'marvelstudios',
        postImage: 'posts/marvel2.jpg',
        likes: '12,764 likes',
        caption: 'Legends never die.',
        views: 'View all 99,068 comments',
        postTime: '3 september 2021'
    },
    {
        imageIcon: 'stories/amazon.jpg',
        name: 'amazonprime',
        postImage: 'posts/the boys2.jpg',
        likes: '12,645,764 likes',
        caption: "The bad guys don't get punished.",
        views: 'View all 97,028 comments',
        postTime: '21 October 2021'
    },
];

//post making function goes here 
function postCreate(value) {
    let posts = document.getElementById('posts');
    let postItem = document.createElement('div');
    postItem.classList.add('post');
    postItem.innerHTML = `<div class="post-name">
                              <div>
                                  <div class="post-name-image">
                                      <img src="${postData[value].imageIcon}">
                                  </div>
                                  <div>${postData[value].name}</div>
                              </div>
                              <div>
                                  <img src="icons/dots.png">
                              </div>
                          </div>
                          <div class="post-image">
                              <i class="fa fa-heart white-heart"></i>
                              <img src="${postData[value].postImage}">
                              <div class="collection">
                                    <div>
                                        <img src="${postData[value].postImage}">
                                        <div>Saved</div>
                                    </div>
                                    <div>Save to Collection</div>
                              </div>
                          </div>
                          <div class="post-icons">
                              <div>
                                  <img class="heart" src="icons/heart-thin.png">
                                  <img src="icons/comment.png">
                                  <img src="icons/forward.png">
                              </div>
                              <div>
                                  <img class="save-post" src="icons/save-thin.png">
                              </div>
                          </div>
                          <div class="post-liked">${postData[value].likes}</div>
                          <div class="post-comment">
                              <strong>${postData[value].name}</strong> ${postData[value].caption}
                          </div>
                          <div class="post-view-comment">${postData[value].views}</div>
                          <div class="add-comment">
                              <div>
                                  <img src="${storyData[0].image}">
                                  <input type="text" placeholder="Add a comment...">
                              </div>
                              <div>
                                  <div><img src="icons/red-heart.png"> </div>
                                  <div><img src="icons/laugh.png"> </div>
                                  <div><img src="icons/add-icon.png"> </div>
                              </div>
                          </div>
                          <div class="post-time">${postData[value].postTime}</div>`;

    posts.appendChild(postItem);
}

// global variables declared here 
let heart = document.getElementsByClassName('heart');
let postImage = document.getElementsByClassName('post-image');
let whiteHeart = document.getElementsByClassName('white-heart');
let savePost = document.getElementsByClassName('save-post');
let isPostSaved = [];
let collection = document.getElementsByClassName('collection');
let storyContainer = document.getElementById('storyContainer');
let Box = document.getElementsByClassName('box');
let storyName = document.getElementById('story-name');
let storyTime = document.getElementById('story-time');
let storyImage = document.getElementById('story-image');
let storyContent = document.getElementById('story-content');
let backButton = document.getElementById('backButton');
let fill = document.getElementById('fill');
let scale = '';

// window onload function goes here 
window.onload = () => {
    // creating story onload 
    let storyLength = storyData.length;
    for (let i = 0; i < storyLength; i++) {
        storyCreate(i);
        Box[i].addEventListener('click', () => {
            storyContainer.style.display = 'flex';
            storyName.innerHTML = storyData[i].name;
            storyTime.innerHTML = storyData[i].storyTime;
            storyImage.src = storyData[i].image;
            storyContent.src = storyData[i].content;
            storyContent.play();
            document.getElementsByClassName('image-container')[i].style.background = ' rgba(255, 255, 255, 0.4)';
            scale = setInterval(() => { // progress bar
                fill.style.width = `${(storyContent.currentTime / storyContent.duration) * 100}%`;
                if (fill.style.width == '100%') {
                    fill.style.width = '0%';
                    storyContainer.style.display = 'none';
                    clearInterval(scale);
                }
            }, 1);
        });
    }

    // creating post onload 
    let postLength = postData.length;
    for (let i = 0; i < postLength; i++) {
        postCreate(i);
        // function to like the post 
        heart[i].addEventListener('click', () => {
            if (heart[i].style.filter == "none") {
                heart[i].src = 'icons/heart-thin.png';
                heart[i].style.filter = 'invert(100%)';
            } else {
                heart[i].src = 'icons/red-heart.png';
                heart[i].style.filter = 'none';
            }
        });

        // function to like the post by using double click 
        postImage[i].addEventListener('dblclick', () => {
            whiteHeart[i].style.display = 'flex';
            whiteHeart[i].style.transform = 'scale(1)';
            heart[i].src = 'icons/red-heart.png';
            heart[i].style.filter = 'none';
            setTimeout(() => {
                whiteHeart[i].style.display = 'none';
            }, 800);
        });

        // save post option 
        isPostSaved.push(false);
        savePost[i].addEventListener('click', () => {
            if (isPostSaved[i]) {
                savePost[i].src = 'icons/save-thin.png';
                isPostSaved[i] = false;
            } else {
                savePost[i].src = 'icons/save-fill.png';
                collection[i].style.display = 'flex';
                setTimeout(() => {
                    collection[i].style.display = 'none'
                }, 1000);
                isPostSaved[i] = true;
            }
        });
    }
};

backButton.addEventListener('click', () => {
    storyContent.pause();
    storyContainer.style.display = 'none';
    clearInterval(scale);
});

