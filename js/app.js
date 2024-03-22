console.log('Jsnack-object')

//JSNACK 3
console.log('js-snack3')

/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
Crea un nuovo array con la lista dei mammiferi.
[
  { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
  { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
  { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]

creazione array con lista di animali  */

const animals = [
    {
        nome: 'leone',
        famiglia:'felino',
        classe:'mammifero',
    
    },
    {
        nome: 'cane',
        famiglia:'canide',
        classe:'mammifero',
    
    },
    {
        nome: 'tartaruga',
        famiglia:'testuggine',
        classe:'ovipari',
    
    },
    {
        nome: 'cobra',
        famiglia:'serpente',
        classe:'rettile',
    
    },
    {
        nome: 'corvo',
        famiglia:'uccello',
        classe:'volatile',
    
    },

    {
        nome: 'siamese',
        famiglia:'gatto',
        classe:'mammifero',
    
    },
    {
        nome: 'zebra',
        famiglia:'equide',
        classe:'mammifero',
    
    },
    {
        nome: 'delfino',
        famiglia:'delphinidae',
        classe:'mammifero',
    
    },
    {
        nome: 'cavallo',
        famiglia:'equide',
        classe:'mammifero',
    
    },
    {
        nome: 'oca',
        famiglia:'anatide',
        classe:'uccello',
    
    },

];

console.log(animals);

//per una questione di ordine avrei potuto scriverli come nell'esempio 
// tipo così:  { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ }

//Crea un array per i mammiferi.

 //-creare un array vuoto dove inserire i mammiferi
const mammiferi =[]
console.log(mammiferi)
  
 //-creare un ciclio for per cui per ogni elemento dell'array 
for (let i = 0; i < animals.length; i++) {

  //-creare una variabile valore di i
    let mammifero = animals[i]
    // console.log(mammifero)
    if (mammifero.classe === 'mammifero')
    mammiferi.push(mammifero);
}
  //--- si controlla SE la classe corrisponde a mammiferi
  //---allora pushiamo l'elemento nell'array mammiferi

  console.log(mammiferi)


  //JS SNACK 4

  console.log('js-snack4')

  /*
  Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
nome e cognome e l’indicazione se può guidare, in base all’età.
Javascript - JS
JSnack 4
   */
  
//Creare un array di persone con cognome ed età

const persone = [
    {
      nome:'Marco',
      cognome:'Palla',
      età: '12'

    },
    {
        nome:'Marzia',
        cognome:'Porta',
        età: '45'
  
      },
      {
        nome:'Guido',
        cognome:'Scorza',
        età: '58'
  
      },
      {
        nome:'Luisa',
        cognome:'Marconi',
        età: '18'
  
      },
      {
        nome:'Paolo',
        cognome:'Paolucci',
        età: '15'
  
      },

];

console.log(persone)

//creare un secondo array con una frase con nome cognome e se può guidare
const drivers = [];

//creare un ciclo for 
for(let i = 0; i<persone.length; i++){
    const persona = persone[i];
    console.log(persona)
}

//SE l'età è uguale o maggiore di 18
//allora lo pushiamo nel nuovo array con la frase può gridare








 