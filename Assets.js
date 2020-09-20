let sprites = {};
let assetsStilLoading = 0;

function assetsLoopCarregando(callback){
    if(assetsStilLoading){
        requestAnimationFrame(assetsLoopCarregando.bind(this, callback));
    }else{
        callback();
    }
}

function carregaAssets(callback){
    function carregaSprite(nomeArquivo){
        assetsStilLoading++;

        let spriteImage = new Image();
        spriteImage.src = "./assets/sprites/" + nomeArquivo;

        spriteImage.onload = function(){
            assetsStilLoading--;
        }

        return spriteImage;
    }
    sprites.backgorund = carregaSprite('spr_background4.png');
    sprites.stick = loadSprite('spr_stick.png')

    assetsLoopCarregando(callback);
}