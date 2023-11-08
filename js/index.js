function convertHackerText (texto) {
    const leetText = {
        a: "@",
        b: "ß",
        e: "€",
        g: "6",
        l: "|",
        o: "Ø",
        s: "$",
        t: "|",
        z: "7_",
    }
    
    let textToHacker = "";
    
    for(let i = 0; i < texto.length ; i++){
    const oneCharacterRecivedText = texto[i].toLowerCase();
        if(leetText.hasOwnProperty(oneCharacterRecivedText)){
            textToHacker += leetText[oneCharacterRecivedText];
        } else {
            textToHacker += texto[i];
        }
    }

    return textToHacker;
}