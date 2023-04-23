const num = ['1', '2', '3', '4', '5']

$('#add1').click(f1)
$('#del1').click(f2)
$('#del2').click(f3)

function f1(){
    let nama = $('#in1').val()
    num.push(nama)
    $('#out').text(num)
}

function f2(){
    let namb = $('#in1').val()
    num.pop(namb)
    $('#out').text(num)
}

function f3(){
    let namc = $('#in1').val()
    num.shift(namc)
    $('#out').text(num)
}