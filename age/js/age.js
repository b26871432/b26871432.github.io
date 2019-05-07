console.log('程式執行')

var checkAge = function() {
    console.log('被按到了！')
    var age = $('#InputAge').val()

    if (age >= 18) {
        $('#Output').val('已成年')
    } else {
        $('#Output').val('未成年')
    }
}

$('#Run').on('click', checkAge)