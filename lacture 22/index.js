const followbtn = document.getElementsByClassName("follow-btn")[0];
const likebtn = document.getElementsByClassName("like-btn")[0];
const sharebtn = document.getElementsByClassName("share-btn")[0];
const commentbtn = document.getElementsByClassName("comment-btn")[0];
const postcommentbtn = document.getElementsByClassName("post-comment-btn")[0];
const likeCount = document.getElementsByClassName("likes-count")[0];
const sharesCount = document.getElementsByClassName("shares-count")[0];
const commentsCount = document.getElementsByClassName("comments-count")[0];
const commentsSection = document.getElementsByClassName("comments-section")[0];

const likesKey="like";
const commentsKey="comments";
const sharesKey="shares";

let likes= localStorage.getItem(likesKey)||sessionStorage.getItem(likesKey)||0;
let comments=localStorage.getItem(commentsKey)||sessionStorage.getItem(commentsKey)||0;
let shares=localStorage.getItem(sharesKey)||sessionStorage.getItem(sharesKey)||0;

likeCount.textContent=`${likes} likes`;
sharesCount.textContent=`${shares} shares`;
commentsCount.textContent=`${comments} comments`;

followbtn.addEventListener('click',()=>{
    followbtn.textContent=followbtn.textContent=="Follow"?"Unfollow":"Follow";
});

likebtn.addEventListener('click',()=>{
    likes++;
    localStorage.setItem(likesKey,likes);
    sessionStorage.setItem(likesKey,likes);
    likeCount.textContent=`${likes} likes`;
    likebtn.style.backgroundcolor='#0069d9';
    setTimeout(() => {
        likebtn.style.backgroundcolor='#0007bff';
    }, 500);
});

sharebtn.addEventListener('click',()=>{
    shares++;
    localStorage.setItem(sharesKey,shares);
    sessionStorage.setItem(sharesKey,shares);
    sharesCount.textContent=`${shares} shares`;
    alert('shared!');
});

commentbtn.addEventListener('click',()=>{
    commentsSection.style.display=commentsSection.style.display=='none'?'block':'none';
    const input=commentsSection.getElementsByTagName('input')[0];
    const postbtn=commentsSection.getElementsByTagName('button')[0];
    input.style.display='block';
    postbtn.style.display='block';
});

postcommentbtn.addEventListener('click',()=>{
    const comment=commentsSection.getElementsByTagName('input')[0].value;
    comments++;
    localStorage.setItem(commentsKey,comments);
    sessionStorage.setItem(commentsKey,comments);
    commentsCount.textContent=`${comments} comments`;
    commentsSection.getElementsByTagName('input')[0].value='';
    alert(`comment posted:${comment}`);
});