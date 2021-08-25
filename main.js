*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    /* font-family: 'Dosis', sans-serif; */
    font-family: 'Roboto', sans-serif;
}
body{
    background-color: black;
    color: white;
    height: 100vh;
}
/* utility classes goes here  */

/* header section goes here  */
header{
    display: flex;
    align-items: center;
    justify-content: space-between ;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.164);
    z-index: 100;
    background-color: black;
}
header img{
    filter: invert(100%);
    padding: .5rem .3rem;
    height: 3.3rem;
}
nav{
    display:flex;
    align-items: center;
}
nav i{
    padding: .3rem 1rem;
    font-size: 1.8rem !important;
    font-weight: 900;
}
nav img{
    padding: .3rem .7rem;
    height: 2.2rem;
}

/* article section goes here  */
article{
    width: 100%;
    height: 100vh;
    padding: 4rem 0 2rem;
}
section::-webkit-scrollbar{
    display: none;
}
/* story section goes here  */
#story{
    width: 100%;
    height: 8rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    overflow: hidden;
    overflow-x: auto;
}
#story::-webkit-scrollbar{
    display: none;
}
.box{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 5.5rem;
    height: 7.5rem;
    margin-left: 1rem;
}
.image-container{
    background: linear-gradient(210deg,rgb(255, 0, 128),#ff9900);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.5rem;
    height:5.5rem;
}
.image-container img{
    border-radius: 50%;
    width: 95%;
    height: 95%;
    padding: 0.3rem ;
    background-color: black;
}
.user-name{
    font-size: .65rem;
    margin: 0.3rem 0;
}

/* posts section goes here  */
#posts{
    padding-bottom: .5rem;
}
#posts::-webkit-scrollbar{
    display: none;
}
/* post header section goes here  */
.post-name{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: .7rem;
    font-weight: 600;
}
.post-name div:first-child{
    display: flex;
    align-items: center;
}
.post-name-image img{
    width: 2.5rem;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.274);
    padding: 2px;
    margin: .5rem;
}
.post-name div:last-child img{
    filter: invert(100%);
    width: 1rem;
    margin-right:1rem;
}

/* post full size image goes here  */
.post-image img{
    width: 100%;
}

/* post icon images  */
.post-icons{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.post-icons img{
    filter: invert(100%);
    width: 1.5rem;
    margin: .5rem 0 .5rem 1rem;
}
.post-icons > div:last-child img{
    margin: .5rem 1rem .5rem 0;
}

/* post likes   */
.post-liked{
    margin: 0 1rem;
    font-weight: 600;
    font-size: .7rem;
    padding: .25rem 0 0;
}

/* post comments  */
.post-comment{
    font-size: .7rem;
    margin: 0 1rem;
    padding: .25rem 0  0;
}

/* post views  */
.post-view-comment{
    font-size: .7rem;
    margin: 0 1rem;
    color: rgba(255, 255, 255, 0.5);
    padding: .25rem 0;
}

/* add a comment section goes here  */
.add-comment{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;
}
.add-comment img{
    width: 1.8rem;
    border-radius: 50%;
}
.add-comment input{
    border: none;
    color: white;
    background-color: black;
    font-size: .9rem;
    width: 80%;
    padding: .3rem;
}
.add-comment > div{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.add-comment > div:first-child{
    justify-content: flex-start;
    width: 75%;
}
.add-comment > div:last-child{
    width: 25%;
}
.add-comment > div:last-child img{
    width: 1rem;
}
.add-comment > div:last-child div:last-child img{
    filter: invert(100%);
}

/* post time   */
.post-time{
    font-size: 0.5rem;
    margin: 0.3rem 1rem .5rem;
    color: rgba(255, 255, 255, 0.404);
}

/* caught up section goes here   */
#caughtUp{
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 4rem 0 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#tick img{
    width: 5.5rem;
}
#heading{
    font-size: 1.5rem;
}
#paragraph , #caughtUp a{
    margin: .7rem 0;
    font-size: 0.7rem;
}
#caughtUp a{
    font-weight: 600;
    color: rgb(0, 102, 255);
    text-decoration: none;
}

/* footer section goes here  */
footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: black;
}
footer img{
    width: 1.7rem;
    filter: invert(100%);
}
footer img:last-child{
    filter: none;
    border-radius: 50%;
}
