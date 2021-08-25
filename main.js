// story data goes here 
const storyData = [
    {
        image: "icons/user.jpg",
        name: "Your Story"
    },
    {
        image: "stories/naveen.jpg",
        name: "here_is_naveen_"
    },
    {
        image: "stories/rdj.jpg",
        name: "robertdowneyjr"
    },
    {
        image: "stories/ian.jpg",
        name: "iansomerhalder"
    },
    {
        image: "stories/joseph.jpg",
        name: "therealjoseph"
    },
    {
        image: "stories/tom.jpg",
        name: "tom_ellis_"
    },
    {
        image: "stories/paul.jpg",
        name: "paulwesley"
    },
    {
        image: "stories/marvel.jpg",
        name: "marvelstudios"
    },
    {
        image: "stories/chris.jpg",
        name: "chrishemsworth"
    },
    {
        image: "stories/netflix.jpg",
        name: "Netflix"
    },
    {
        image: "stories/amazon.jpg",
        name: "amazonprime"
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
        imageIcon : 'icons/user.jpg',
        name : 'pandatboyy',
        postImage : 'posts/pandat.jpg',
        likes : '10,952,764 likes',
        caption : 'Just setting up my instagram 🙂😎.',
        views : 'View all 44,980 comments',
        postTime : '15 May 2021'
    },
    {
        imageIcon : 'stories/naveen.jpg',
        name : 'here_is_naveen_',
        postImage : 'posts/naveen.jpg',
        likes : '9,952,764 likes',
        caption : 'Why so serious?',
        views : 'View all 4,993 comments',
        postTime : '8 August 2021'
    },
    {
        imageIcon : 'stories/ian.jpg',
        name : 'iansomerhalder',
        postImage : 'posts/ian.jpg',
        likes : '52,764 likes',
        caption : 'I know you are obsessed with me 😘.',
        views : 'View all 4,520 comments',
        postTime : '8 December 2021'
    },
    {
        imageIcon : 'stories/joseph.jpg',
        name : 'therealjoseph',
        postImage : 'posts/joseph.jpg',
        likes : '23,064 likes',
        caption : "Yoy've heard of me?...Fantastic 😈",
        views : 'View all 3,128 comments',
        postTime : '16 May 2021'
    },
    {
        imageIcon : 'stories/rdj.jpg',
        name : 'robertdowneyjr',
        postImage : 'posts/rdj.jpg',
        likes : '12,345,764 likes',
        caption : 'I Am... Iron Man 😉😎.',
        views : 'View all 7,328 comments',
        postTime : '4 April 2021'
    },
    {
        imageIcon : 'stories/chris.jpg',
        name : 'chrishemsworth',
        postImage : 'posts/chris.jpg',
        likes : '1,232,764 likes',
        caption : 'I am thor god of thunder ⚡⚡⚡.',
        views : 'View all 1,068 comments',
        postTime : '11 August 2021'
    },
    {
        imageIcon : 'stories/paul.jpg',
        name : 'paulwesley',
        postImage : 'posts/paul.jpg',
        likes : '92,764 likes',
        caption : 'To beat the villain 🦹‍♂️. you have to be the better villain 😈.',
        views : 'View all 12,068 comments',
        postTime : '23 July 2021'
    },
    {
        imageIcon : 'stories/tom.jpg',
        name : 'tom_ellis_',
        postImage : 'posts/tom.jpg',
        likes : '9,212,764 likes',
        caption : 'I am a Devil of my Word 😈',
        views : 'View all 71,328 comments',
        postTime : '17 November 2021'
    },
    {
        imageIcon : 'stories/marvel.jpg',
        name : 'marvelstudios',
        postImage : 'posts/marvel.jpg',
        likes : '99,764 likes',
        caption : 'Let the fun begin',
        views : 'View all 31,028 comments',
        postTime : '1 May 2021'
    },
    {
        imageIcon : 'stories/netflix.jpg',
        name : 'Netflix',
        postImage : 'posts/netflix.jpg',
        likes : '120,564 likes',
        caption : 'Lucifer season 6 is out September 10 on Netflix worldwide.',
        views : 'View all 10,328 comments',
        postTime : '10 September 2021'
    },
    {
        imageIcon : 'stories/amazon.jpg',
        name : 'amazonprime',
        postImage : 'posts/the boys.jpg',
        likes : '9,782,764 likes',
        caption : "A stranger is just a friend you ain't met yet.",
        views : 'View all 1,397 comments',
        postTime : '13 November 2021'
    },
    {
        imageIcon : 'stories/marvel.jpg',
        name : 'marvelstudios',
        postImage : 'posts/marvel2.jpg',
        likes : '12,764 likes',
        caption : 'Legends never die.',
        views : 'View all 99,068 comments',
        postTime : '3 september 2021'
    },
    {
        imageIcon : 'stories/amazon.jpg',
        name : 'amazonprime',
        postImage : 'posts/the boys2.jpg',
        likes : '12,645,764 likes',
        caption : "The bad guys don't get punished.",
        views : 'View all 97,028 comments',
        postTime : '21 October 2021'
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
                              <img src="${postData[value].postImage}">
                          </div>
                          <div class="post-icons">
                              <div>
                                  <img src="icons/heart-thin.png">
                                  <img src="icons/comment.png">
                                  <img src="icons/forward.png">
                              </div>
                              <div>
                                  <img src="icons/save-thin.png">
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
                                  <input type="text" placeholder="Add a comment..." id="input-comment">
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

window.onload = () => {
    // creating story onload 
    let storyLength = storyData.length;
    for (let i = 0; i < storyLength; i++) {
        storyCreate(i);
    }

    // creating post onload 
    let postLength = postData.length;
    for (let i = 0; i < postLength; i++) {
        postCreate(i);
    }
};
