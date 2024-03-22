console.log('Jsnack-object')

//JSNACK 3

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
        classe:'uccelli',
    
    },

];

console.log(animals);

//per una questione di ordine avrei potuto scriverli come nell'esempio 

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
  



 