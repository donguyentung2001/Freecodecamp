let comments= document.querySelector('.comment');
const sth=comments.value;
const submit=document.querySelector('.submit-comment')
let comment_display=document.querySelector('.comment-place')
submit.addEventListener('click',post)
comment_display.setAttribute('style','white-space: pre;');
function post() { 
    var newline = "\r\n";
    comment_display.textContent+=comments.value;
    comment_display.textContent+= newline;
    comments.value='';
    comments.focus();
}
