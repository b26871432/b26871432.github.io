console.log('程式執行')


$('#Run').on('click', () => {
    var n = $('#Input').val()
    var isPrime = true
    for (i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            isPrime = false
            break
        }
    }
    if (isPrime) {
        $('#Output').val(n + '是質數')
    } else {
        $('#Output').val(n + '不是質數')
    }
})