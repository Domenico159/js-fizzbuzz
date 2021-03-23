
// Contare da 1 a 100

// A tutti i multipli di 3 , scrivere in console buzz

// A tutti i multipli di 5 , scrivere in console fizz

// A tutti i multipli di 3 e 5 , scrivere in console fizzbuzz

// Tutto il restante scriverlo in console




for (var i = 1 ; i <= 100; i++){

    if ((i % 5 === 0) && (i % 3 ===0)){
        console.log('FIZZBUZZ');
    }else if(i % 5 === 0) {
        console.log('BUZZ');
    }else if(i % 3 === 0) {
        console.log('FIZZ');
    }else{
        console.log(i);
    }
}
