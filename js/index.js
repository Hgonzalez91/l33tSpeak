//VARIABLES 

let insertText = document.getElementById('insertText');
let btnBasic = document.getElementById('btnBasic');
let btnIntermediate = document.getElementById('btnIntermediate');
let btnAdvanced = document.getElementById('btnAdvanced');
let btnRetardar = document.getElementById('btnRetardar');
let obtain = document.getElementById('obtain');


//TRANSLATE TRANSLATE TRANSLATE
const leetBasic = {
    a: "4",
    b: "l3",
    e: "3",
    g: "&",
    l: "1",
    o: "0",
    s: "5",
    t: "7",
    z: "2",
}
const leetIntermediate = {
    a: "@",
    b: "ß",
    e: "&",
    g: "9",
    l: "|",
    o: "Ø",
    s: "z",
    t: "+",
    z: "7_",
}
const leetAdvanced = {
    a: "^",
    b: "ദ",
    e: "€",
    g: "C-",
    l: "!",
    o: "oh",
    s: "es",
    t: "✞",
    z: "%",
}
const leetRetardar = {
    a: "Ω",
    b: "6",
    e: "[-",
    g: "(?,",
    l: "3y3",
    o: "<>",
    s: "2",
    t: "~|~",
    z: "-/_",
}

//EVENTOS EN BOTON PARA TRADUCIR

btnBasic.addEventListener('click', () => {
    let text1 = insertText.value;
    let basic = "";
    
    for(let i = 0; i < text1.length ; i++){
    const recived1 = text1[i].toLowerCase();
        if(leetBasic.hasOwnProperty(recived1)){
            basic += leetBasic[recived1];
        } else {
            basic += text1[i];
        }
    }

    obtain.innerText = basic;
})

btnIntermediate.addEventListener('click', () => {
    let text2 = insertText.value;
    let intermediate = "";
    
    for(let i = 0; i < text2.length ; i++){
    const recived2 = text2[i].toLowerCase();
        if(leetIntermediate.hasOwnProperty(recived2)){
            intermediate += leetIntermediate[recived2];
        } else {
            intermediate += text2[i];
        }
    }

    obtain.innerText = intermediate;
})

btnAdvanced.addEventListener('click', ()=>{
    let text3 = insertText.value;
    let advanced = "";
    
    for(let i = 0; i < text3.length ; i++){
    const recived3 = text3[i].toLowerCase();
        if(leetAdvanced.hasOwnProperty(recived3)){
            advanced += leetAdvanced[recived3];
        } else {
            advanced += text3[i];
        }
    }

    obtain.innerText = advanced;
})

btnRetardar.addEventListener('click', ()=>{
    let text4 = insertText.value;
    let retardar = "";
    
    for(let i = 0; i < text4.length ; i++){
    const recived4 = text4[i].toLowerCase();
        if(leetRetardar.hasOwnProperty(recived4)){
            retardar += leetRetardar[recived4];
        } else {
            retardar += text4[i];
        }
    }

    obtain.innerText = retardar;
})