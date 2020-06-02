// 當文件已經全載入至記憶體時，開始執行程式
$(document).ready(function() {

    $('#product-list').empty();
    $('#page').hide()

    var items = null
    var pageCount = 20
    var currentPage = 1

    $('#query').on('click', function() {
        $.get('https://js.kchen.club/B04704043/query', function(response) {
            if (response) {
                if (response.result) {
                    items = response.items
                    $('#product-list').empty()
                    showItems(1, items)
                    newPage(items.length, pageCount, items)
                    $('#page').show()

                } else {
                    $('#message').text('查無相關資料')
                    $('#dialog').modal('show')
                }
            } else {
                $('#message').text('伺服器出錯')
                $('#dialog').modal('show')
            }

            console.log(response)
        }, "json")
    })

    var showItems = (page, items) => {
        if (items == null) return
        var start = (page - 1) * pageCount
        var end = start + pageCount - 1
        $('#product-list').empty()
        for (var i = start; i <= end; i++) {
            newItem(items[i])
        }
    }

    var newItem = (item) => {
        try {
            $img = $('<img>').attr('class', 'image').attr('src', item.image)
            $h3 = $('<h3>').attr('class', 'name').text(item.name)
            $p = $('<p>').attr('class', 'price').text('NT$ ' + item.price)

            $item = $('<div>').attr('class', 'item').append($img).append($h3).append($p)
            $col = $('<div>').attr('class', 'col').append($item)

            $('#product-list').append($col)
        } catch (e) {
            console.log('Error in loading items')
        }
    }

    var newPage = (n, pageCount, pageItems) => {
        var pageNum = n / pageCount
        pageNum = (n % pageCount != 0) ? pageNum + 1 : pageNum
        pageNum = Math.floor(pageNum)
        $('#page-number').empty()



        $la = $('<a>').attr('class', 'page-link').attr('href', '#').attr('tabindex', '-1').attr('aria-disabled', 'true').text('«')
        $lli = $('<li>').attr('class', 'page-item').addClass('disabled').append($la)
        $lli.on('click', function() {
            currentPage = Number($('li.page-item.active').text())
            if (currentPage > 1) {
                switchPage(currentPage, currentPage - 1, pageNum)
                currentPage = currentPage - 1
                showItems(currentPage, pageItems)
            }
        })

        $('#page-number').append($lli)

        for (var i = 1; i <= pageNum; i++) {
            $a = $('<a>').attr('class', 'page-link').attr('href', '#').text(i)
            $a.on('click', function() {
                var i = $(this).text()
                showItems(Number(i), pageItems)
                switchPage(currentPage, i, pageNum)
                currentPage = i
            })

            var strActive = ((i == 1) ? ' active' : '')
            $li = $('<li>').attr('class', 'page-item' + strActive).append($a)
            $('#page-number').append($li)
        }



        $ra = $('<a>').attr('class', 'page-link').attr('href', '#').text('»')
        if (pageNum == 1) {
            $rli = $('<li>').attr('class', 'page-item disabled').append($ra)
        } else {
            $rli = $('<li>').attr('class', 'page-item').append($ra)
        }
        $rli.on('click', function() {
            currentPage = Number($('li.page-item.active').text())
            if (currentPage < pageNum) {
                switchPage(currentPage, currentPage + 1, pageNum)
                currentPage = currentPage + 1
                showItems(currentPage, pageItems)
            }
        })
        $('#page-number').append($rli)

    }

    var switchPage = function(toPage, allPage) {
        $ali = $('li.page-item')
        $ali.removeClass()
        if (toPage == 1) {
            $lli.removeClass()
            $lli.addClass('page-item disabled')
        } else {
            $lli.removeClass()
            $lli.addClass('page-item')
        }

        if (toPage == allPage) {
            $rli.removeClass()
            $rli.addClass('page-item disabled')
        } else {
            $rli.removeClass()
            $rli.addClass('page-item')
        }

        $ali.addClass('page-item')
        $($ali[Number(toPage)]).addClass('active')

    }
})