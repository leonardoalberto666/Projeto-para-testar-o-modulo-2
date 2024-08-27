function ajuste(){
    var tela = window.innerWidth
    var div4 = window.document.getElementById('div4')

    if (tela < 550){                //ajusta número de colunas
        div4.style.columns = '1'
    } else if(tela < 1200) {
        div4.style.columns = '2'
    } else {
        div4.style.columns = '3'
    }

}

setInterval(ajuste, 1000)