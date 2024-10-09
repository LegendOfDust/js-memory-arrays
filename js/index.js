const spellBook = [ 'expelliarmus', 'Accio', 'Expecto Patronum', 'Wingardium Leviosa' ];
let mannaPoints = 50;

const castSpell = () => {
    console.log('Huzzah! a spell has been cast');
    //choose a random spell from the array
    const randomIndex = Math.floor(Math.random() * spellBook.length);
    const randomSpell = spellBook[randomIndex];
    console.log('randomSpell: ', randomSpell);

    if(mannaPoints <= 0){
        const spellElement = document.getElementById('spell');
        spellElement.textContent = "You are out of manna";
    }
    else{
        //show the user the spell on the screen
        const spellElement = document.getElementById('spell');
        const message = `You cast the ${randomSpell} spell!`;
        spellElement.textContent = message;

        //subract 5 mana points from the total
        mannaPoints -= 5;
        console.log(mannaPoints);
        
        //show the user the new mana points on the screen
        const mannaElement = document.getElementById('manna');
        mannaElement.textContent = mannaPoints;
    }
}