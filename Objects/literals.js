

function skier(name, sound){
    return{
        name:name,
        sound:sound,
        powderYell:function(){
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}`);
        }
    };
}

skier("Sendy","woo").powderYell();
console.log(skier("Sendy","woo").name);
console.log(skier("Sendy","woo"));