
let audios= document.querySelectorAll('audio');
let keys= document.querySelectorAll('.key');



window.addEventListener('keydown', function(event){
    keys.forEach(clé => { 
        console.log(clé.dataset.key)
        if( clé.dataset.key == event.keyCode){
            clé.classList.add('playing','sound')
            clé.addEventListener('transitionend', function () {
                clé.classList.remove('playing','sound')
            })
            audios.forEach(audio =>{
                if( audio.dataset.key == event.keyCode){
                    audio.play();
                    audio.currentTime = 0
                }
            })
        }
    });
})

/*
récuperer tout les audios
récuperer toutes les cases 

mettre un écouteur d'événement sur la fenetre de type keydown qui lance une fonction playSound()

SI l'evenement est égale au data-key d'un des element du tableau audio 
je récupere l'element et je joue le son +
j'ajoute l'animation (ajouter class)


-----------

Mettre un 2eme écouteur d'evenement de type keyup > fonction removeTransistion

Si on lache la touche du clavier on arrète le son et on supprime les animations 

*/
/*
-------------------------------------------------------------------------
- coder la fonction beatBox sur un btn 
elle appuie sur une lettre du drumppad


*/

async function beatBox(){ 


function simulateKey (key){ 
    var boxkey = new Event('keydown', {"bubbles":true});
    boxkey.keyCode=key
    window.dispatchEvent(boxkey)

}

function playBeat(time,key){
    return new Promise(
        function (resolve,reject) {
            setTimeout(function () {
                resolve(simulateKey(key));
            },time)
        })

}

    await playBeat(300,87)
    await playBeat(800,90)
    await playBeat(800,87)
    await playBeat(300,90)
    await playBeat(300,88)
    await playBeat(800,87)
    await playBeat(800,90)
    await playBeat(800,87)
    await playBeat(300,90)
    await playBeat(300,88)
    await playBeat(800,87)
    await playBeat(800,90)
    await playBeat(800,87)
    await playBeat(300,90)
    await playBeat(300,88)


}