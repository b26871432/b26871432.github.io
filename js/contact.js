var initSubject = '留下您的大名',
    initBody = '寫下您想說的話'

function submitHandler() {
    var to = 'b26871432@gmail.com';
    var name = nameText.value; //讀取ID為 nameTextuser 物件中的值
    var email = emailText.value;
    //把user填的資料都塞到 mail body 中
    var body = "" + bodyText.value + '%0A%0A%0A'; //%0A是換行 換了三行
    body += "From：" + nameText.value + '%0A';
    body += "Email：" + emailText.value + '%0A';
    //傳送的主要程式碼
    mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    mailTo.click();
}
//在body onload
function init() {
    subText.value = initSubject;
    toText.value = initTo;
    bodyText.value = initBody;
}