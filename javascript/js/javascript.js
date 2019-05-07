var str;

// 先將 id = demo 的內容讀出來
str = document.getElementById('demo').innerHTML

//將 str 後面加上 'demo' 放回 id = demo 的內容裡
document.getElementById('demo').innerHTML = str + 'demo'