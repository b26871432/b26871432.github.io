var table = document.getElementById('data')
$('#start').hide()
$('#query2').hide()
$('#end').hide()
$('#firstend').hide()
$('#secondend').hide()
$('#thirdend').hide()

for (let i = 0; i < 13; i++) {
    $('#name' + i).hide()
}

$('#query').on('click', function() {
    for (let i = 1; i < 13; i++) {
        value = $('#number' + i).val()
        $('#number' + i).remove()
        $('#num' + i).append(value)
        $('#query').remove()
        $('#query2').show()
        $('#name' + i).show()
    }
})

$('#query2').on('click', function() {
    for (let i = 1; i < 13; i++) {
        value = $('#name' + i).val()
        $('#name' + i).remove()
        $('#nam' + i).append(value)
        $('#query2').remove()
        $('#start').show()
    }
})

var resetButtons = function() {
    $activePlayerButtons = $('button.player.active')
    $($activePlayerButtons).each(function(index) {
        $(this).attr('class', 'btn btn-primary player')
    })
    $activeStaButtons = $('button.statistic.active')
    $($activeStaButtons).each(function(index) {
        $(this).attr('class', 'btn btn-primary statistic')
    })
    $disabledPlayerButtons = $('button.player.disabled')
    $($disabledPlayerButtons).each(function(index) {
            $(this).attr('class', 'btn btn-primary player')
        })
        // $disabledStaButtons = $('button.statistic.disabled')
        // $($disabledStaButtons).each(function(index) {
        //     $(this).attr('class', 'btn btn-primary statistic')
        // })
}

var table = document.getElementById('data')
var table2 = document.getElementById('team')


$('#start').on('click', function() {


    $('#start').hide()
    $('.12').each(function() {
        Number($(this).text(0))
    })
    $('#firstend').show()

    p = 1
    $('#firstend').on('click', function() {
        if (confirm("確定這節結束了嗎")) {　
            $('#firstend').hide()
            $('#secondend').show()
            p = 2
        }
    })
    $('#secondend').on('click', function() {
        if (confirm("確定這節結束了嗎")) {　
            $('#secondend').hide()
            $('#thirdend').show()
            p = 3
        }
    })
    $('#thirdend').on('click', function() {
        if (confirm("確定這節結束了嗎")) {　
            $('#thirdend').hide()
            $('#end').show()
            p = 4
        }
    })
    $('#end').on('click', function() {
        if (confirm("確定比賽結束了嗎")) {
            $('#end').hide()
        }
    })

    for (let i = 1; i < 15; i++) {
        $statistic = $('button.statistic').attr('class', 'btn btn-primary statistic disabled')
        name = $('#nam' + i).text()
        $('#nam' + i).empty()
        $player = $('<button>').attr('class', 'btn btn-primary player').attr('id', 'player' + i).attr('value', i).text(name)
        $player.on('click', function() {
            if ($(this).hasClass('disabled') == false) {
                $('button.player').attr('class', 'btn btn-primary player disabled')
                $(this).attr('class', 'btn btn-primary player active')
                a = +$(this).val()
                $('button.statistic').attr('class', 'btn btn-primary statistic')
            }
        })
        $('#nam' + i).append($player)

        sta = $('#sta' + i).text()
        $('#sta' + i).empty()
        $statistic = $('<button>').attr('class', 'btn btn-primary statistic disabled').attr('id', 'sta' + i).attr('value', i).text(sta)
        $statistic.on('click', function() {
            if ($(this).hasClass('disabled') == false) {
                $('button.statitic').attr('class', 'btn btn-primary statistic disabled')
                $(this).attr('class', 'btn btn-primary statistic active')
                b = +$(this).val()
                $('button.statistic').attr('class', 'btn btn-primary statistic disabled')
                c = table.rows[a].cells[b + 1]
                current_val = Number($(c).text())
                if (current_val > 0) {
                    $(c).text(current_val + 1)
                    resetButtons()
                } else {
                    $(c).text(1)
                    resetButtons()
                }

                for (let i = 1; i < 14; i++) {
                    if (b == i) {
                        count = Number($('#total' + i).text())
                        $('#total' + i).text(count + 1)
                    }
                }

                threePTO = +$('#total' + 3).text()
                threePTX = +$('#total' + 4).text()
                threePT = (threePTO / (threePTO + threePTX)) * 10000
                threePT = Math.floor(threePT) * 0.01
                FGO = +$('#total' + 1).text()
                FGX = +$('#total' + 2).text()
                FG = ((FGO + threePTO) / (FGO + threePTX + threePTO + FGX)) * 10000
                FG = Math.floor(FG) * 0.01
                FTO = +$('#total' + 5).text()
                FTX = +$('#total' + 6).text()
                FT = (FTO / (FTO + FTX)) * 10000
                FT = Math.floor(FT) * 0.01
                $('#FGp').text(FG + '%')
                $('#3-ptp').text(threePT + '%')
                $('#FTp').text(FT + '%')

                if (b == 12) {
                    for (let i = 1; i < 5; i++) {
                        if (p == i) {
                            count = Number($('#teamfoul' + i).text())
                            $('#teamfoul' + i).text(count + 1)
                            count = Number($('#teamfoul' + i).text())
                            if (count == 4) {
                                alert('再一犯對方就可以罰球')
                            }
                        }
                    }
                }

                if (b == 1) {
                    for (let i = 1; i < 5; i++) {
                        if (p == i) {
                            point = Number($('#point' + i).text())
                            Number($('#point' + i).text(point + 2))
                            point = Number($('#point' + i).text())
                        }
                    }
                }

                if (b == 3) {
                    for (let i = 1; i < 5; i++) {
                        if (p == i) {
                            threepoint = Number($('#point' + i).text())
                            Number($('#point' + i).text(threepoint + 3))
                            threepoint = Number($('#point' + i).text())
                        }
                    }
                }

                if (b == 5) {
                    for (let i = 1; i < 5; i++) {
                        if (p == i) {
                            point = Number($('#point' + i).text())
                            Number($('#point' + i).text(point + 1))
                            point = Number($('#point' + i).text())
                        }
                    }
                }

                $totalpoint = Number($('#point1').text()) + Number($('#point2').text()) + Number($('#point3').text()) + Number($('#point4').text())
                $('#total').text($totalpoint)

                for (let i = 0; i < 12; i++) {
                    f = $('.12').text()
                    if (f[i] == 4) {
                        namefoul = $('#player' + (i + 1)).text()
                        alert(namefoul + '再一犯犯滿')
                    } else if (f[i] == 5) {
                        namefoul = $('#player' + (i + 1)).text()
                        alert(namefoul + '已經犯滿了，別再讓他下場！！')
                    }
                }

            }
        })
        $('#sta' + i).append($statistic)
    }
    for (let i = 1; i < 5; i++) {
        $('#opp1pt').on('click', function() {
            if (p == i) {
                oppoint = Number($('#oppoint' + i).text())
                Number($('#oppoint' + i).text(oppoint + 1))
                oppoint = Number($('#oppoint' + i).text())
                optotal = Number($('#optotal').text())
                Number($('#optotal').text(optotal + 1))
            }
        })
        $('#opp2pt').on('click', function() {
            if (p == i) {
                oppoint = Number($('#oppoint' + i).text())
                Number($('#oppoint' + i).text(oppoint + 2))
                oppoint = Number($('#oppoint' + i).text())
                optotal = Number($('#optotal').text())
                Number($('#optotal').text(optotal + 2))
            }
        })
        $('#opp3pt').on('click', function() {
            if (p == i) {
                oppoint = Number($('#oppoint' + i).text())
                Number($('#oppoint' + i).text(oppoint + 3))
                oppoint = Number($('#oppoint' + i).text())
                optotal = Number($('#optotal').text())
                Number($('#optotal').text(optotal + 3))
            }
        })
        $('#oppfoul').on('click', function() {
            if (p == i) {
                oppfoul = Number($('#oppfoul' + i).text())
                Number($('#oppfoul' + i).text(oppfoul + 1))
                oppfoul = Number($('#oppfoul' + i).text())
                if (oppfoul == 4) {
                    alert('對方四犯了，往籃下打!!')
                }
            }
        })
    }

    $('td').on('click', function() {
        data = $(this).text()
        if (data > 0) {
            $(this).text(data - 1)
            for (i = 1; i < 14; i++) {
                yes = $(this).hasClass(i)
                if (yes == true) {
                    number = i
                    minus = +$('#total' + i).text()
                    if (minus > 0) {
                        minus = minus - 1
                        $('#total' + i).text(minus)
                    }
                    for (let j = 1; j < 5; j++) {
                        if (i == 12 && p == j) {
                            f = Number($('#teamfoul' + j).text())
                            if (f > 0) {
                                $('#teamfoul' + j).text(f - 1)
                            }
                        }
                        if (i == 1 && p == j) {
                            f = Number($('#point' + j).text())
                            if (f > 0) {
                                $('#point' + j).text(f - 2)
                            }
                        }
                        if (i == 3 && p == j) {
                            f = Number($('#point' + j).text())
                            if (f > 0) {
                                $('#point' + j).text(f - 3)
                            }
                        }
                        if (i == 5 && p == j) {
                            f = Number($('#point' + j).text())
                            if (f > 0) {
                                $('#point' + j).text(f - 1)
                            }
                        }
                    }
                }
            }
        }
        opp = $(this).hasClass('opp')
        if (opp == true) {
            $opptotal = Number($('#optotal').text())
            Number($('#optotal').text($opptotal - 1))
        }

        $totalpoint = Number($('#point1').text()) + Number($('#point2').text()) + Number($('#point3').text()) + Number($('#point4').text())
        $('#total').text($totalpoint)

        FGO = +$('#total' + 1).text()
        FGX = +$('#total' + 2).text()
        FG = FGO / (FGO + FGX)
        threePTO = +$('#total' + 3).text()
        threePTX = +$('#total' + 4).text()
        threePT = threePTO / (threePTO + threePTX)
        FTO = +$('#total' + 5).text()
        FTX = +$('#total' + 6).text()
        FT = FTO / (FTO + FTX)
        $('#FGp').text(FG)
        $('#3-ptp').text(threePT)
        $('#FTp').text(FT)
    })

    $('td.teamdata').off()
    $('td.total').off()
    $('#optotal').off()

    $('#end').addClass('btn btn-primary end')
    $('#end').text('比賽結束')
    $('#end').on('click', function() {
        $('#end').hide()
        $('td').each(function() {
            EachCount = $(this).text()
            if (EachCount == '') {
                Number($(this).text(0))
            }
        })
        $statistic = $('button.statistic').attr('class', 'btn btn-primary statistic disabled')
        $player = $('button.player').attr('class', 'btn btn-primary player disabled')
        $('button.opponent').hide()
        $('td').off()


    })
})