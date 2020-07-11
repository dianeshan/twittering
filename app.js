
function temp(val) {
    var today = new Date();
    var date = (today.getMonth()+1)+'/'+today.getDate() + '/' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return '<div class="tweet_box ui main text container segment postedTweets row justify-content-center"><span>' + val + '</span>' + '<div></div><div class="timestamp">' + date + ' ' + time + '<div></div>';
}
function insertAfter(node, ref){
    ref.parentNode.insertBefore(node, ref.nextSibling);
}
function postTweet(val){
    $("tweetInput").val("");
    $(temp(val)).insertAfter(document.getElementById("posts"));
    document.getElementById("tweetForm").reset();
}

