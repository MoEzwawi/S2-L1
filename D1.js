/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// Inserisco la mia risposta in un console log in modo che sia visualizzabile anche dalla console del browser!

console.log('I principali datatype in Javascript sono 5: String, Number, Boolean, Null e Undefined. Il tipo String è una qualsiasi stringa di testo alfanumerico che può contenere anche segni di punteggiatura che a volte possono richiedere qualche accortezza. Il tipo Number indica un qualsiasi valore numerico, positivo, negativo, con o senza la virgola. Il tipo Boolean è una variabile binaria che può assumere come valori solo true o false, spesso gli elementi booleani vengono usati per controllare condizioni o affermazioni con valore di verità. Il tipo null indica che la nostra variabile non ha un valore, proprio come se fosse una scatola vuota; è bene precisare che il linguaggio Javascript ha una tipizzazione dinamica e che quindi le sue variabili possono, in linea di principio cambiare datatype, anche le nostre variabili null. Infine, la tipologia undefined è una scatolina di memoria che noi abbiamo definito ma che non abbiamo assegnato e quindi assume il type undefined, come tutte le variabili appena nate.')

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

// Ho chiamato la variabile "myName" anziché "name" perché ho notato che "name" dava fastidio a VS Code.

const myName = 'Mohamed'
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12+20)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x=12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// myName = 'Ezwawi'
// de-commentando la precedente riga di codice la console darebbe l'errore "Assignment to a constant variable"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4-x)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = 'john'
const name2 = 'John'

console.log(name1 !== name2)
console.log(name1 === name2)
console.log(name1.toLowerCase === name2.toLowerCase)