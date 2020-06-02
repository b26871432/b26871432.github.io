/// 當網頁內容載入至記憶體後執行
$(() => {
    var rand = (start, end) => {
        // 決定範圍
        var n = Math.abs(end - start) + 1

        // 放大 n 倍
        var r = Math.random() * n

        // 去除小數點
        r = Math.floor(r)

        // 做位移
        r = r + ((start <= end) ? start : end)

        return r
    }

    // v 指的是撲克牌的值
    var dealCard = (v) => {
        $img = $('<img>').attr('class', 'image').attr('src', './poker/back.png').attr('data-value', v)
        $img.on('click', function() {
            var val = $(this).attr('data-value')
            console.log('按到了' + val)
            $(this).attr('src', './poker/pic' + val + '.png')
        })
        $col = $('<div>').attr('class', 'col').append($img)

        $('#data').append($col)
    }

    // 發五張牌
    var dealFive = () => {

        // 產成 52張新的撲克牌 ====================
        var allPoker = []
        for (var i = 1; i <= 52; i++) {
            allPoker.push(i)
        }
        //========================================

        // 洗牌 ==================================
        var n = rand(100, 500)
        for (var i = 0; i < n; i++) {
            var r = rand(0, 51)
            var temp = allPoker[r]
            allPoker[r] = allPoker[0]
            allPoker[0] = temp
        }

        //========================================

        // 將前五張牌顯示在畫面上
        for (var i = 0; i < 5; i++) {
            dealCard(allPoker[i])
        }
    }

    // 使用者按下發牌按鈕
    $('#deal').on('click', function() {
            dealFive()
        })
        //使用者按下判斷牌型
    $('#check').on('click', function() {

        var color = ['梅花', '方塊', '愛心', '黑桃']
        var point = ['1', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

        var hand = []
        handCard = $('img.image')

        for (let i = 0; i < handCard.length; i++) {
            let $img = $(handCard[i]);
            let value = $img.attr('data-value')
            hand.push(value)

        }

        var handPoint = []
        var handColor = []

        for (let i = 0; i < hand.length; i++) {
            let value = hand[i];
            handPoint.push(Math.floor(((value - 1) / 4) + 1))
            handColor.push(((value - 1) % 4))

        }

        var str = ''
        for (let i = 0; i < hand.length; i++) {
            str += color[handColor[i]]
            str += point[handPoint[i]]
            str += ' '
        }

        $('#output').val(str)

        //handPoint.sort();


        // for (i = 1; i < handPoint.length; i++) {
        //     if (handPoint[i] - handPoint[i - 1] != 1) {
        //         isStraight = false
        //         break
        //     }
        // }



        console.dir(handPoint)
        console.dir(handColor)

    })

    $('#data').empty()
})