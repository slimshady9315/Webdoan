// Lấy các phần tử cần thay đổi
var reviewsPane = document.getElementById("reviews");
var tweetsPane = document.getElementById("tweets");
var mediaQuotesPane = document.getElementById("mediaQuotes");
document.querySelector(".tab-list li:first-child").addEventListener("click", function() {
    reviewsPane.style.display = "block";
    tweetsPane.style.display = "none";
    mediaQuotesPane.style.display = "none";
});

// Ẩn phần reviews khi ấn vào tab "TWEETS"
document.querySelector(".tab-list li:nth-child(2)").addEventListener("click", function() {
    reviewsPane.style.display = "none";
    tweetsPane.style.display = "block";
    mediaQuotesPane.style.display = "none";
});

// Hiện phần mediaQuotes khi ấn vào tab "MEDIA QUOTES"
document.querySelector(".tab-list li:nth-child(3)").addEventListener("click", function() {
    reviewsPane.style.display = "none";
    tweetsPane.style.display = "none";
    mediaQuotesPane.style.display = "block";
});


