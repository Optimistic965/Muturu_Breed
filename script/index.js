const img = ['mainHeroBg.svg', 'mainHeroBg2.svg', 'mainHeroBg3.svg']
const homeHero = document.getElementsByClassName('main__cont')

function changeBg(){
    for(let i = 0; i < img.length; i++){
        if(homeHero){
            homeHero.style.background = `url(../media/${img[i]})`
        }
    }
}

$(document).ready(function(){
    document.body.style.zoom = "90%"
    console.log('document is ready')
    $('#team_page #tab_cont').tabs()
    // setInterval(changeBg(), 3000)
    console.log(homeHero)
    $('#home .hero .main__cont div')
})