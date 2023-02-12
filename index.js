const RAZON_NEGRO = 'Negro';
const RAZON_PAR = 'Par';
const RAZON_IMPAR = 'Impar';
const RAZON_ALTO = 'Alto';
const RAZON_ROJO = 'Rojo';
const RAZON_BAJO = 'Bajo';
const RAZON_FILA1 = 'Fila 1';
const RAZON_FILA2 = 'Fila 2';
const RAZON_FILA3 = 'Fila 3';
const RAZON_DOCENA1 = 'Docena 1';
const RAZON_DOCENA2 = 'Docena 2';
const RAZON_DOCENA3 = 'Docena 3';
const RAZON_NUMEROS = 'Numeros';

const MULTIPLICADOR_COLOR = 2;
const MULTIPLICADOR_PAR = 2;
const MULTIPLICADOR_ALTO = 2;
const MULTIPLICADOR_DOCENAS = 3;
const MULTIPLICADOR_FILAS = 3;
const MULTIPLICADOR_NUMEROS = 36;

let ruleta = []
const numerosAuto = [
    32,
    3 ,
    15, 
    14, 
    7,
    15, 
    27, 
    9 ,
    15, 
    12, 
    3 ,
    2,
    17, 
    29, 
    10, 
    3 ,
    1 ,
    8 ,
    26, 
    9 ,
    17, 
    11, 
    17, 
    34, 
    16, 
    34, 
    29, 
    36, 
    33, 
    34, 
    28, 
    36, 
    34, 
    14, 
    7 ,
    23, 
    1 ,
    34, 
    23, 
    19, 
    6 ,
    28, 
    2 ,
    14, 
    16, 
    24, 
    2 ,
    31, 
    8 ,
    10, 
    28, 
    35, 
    15, 
    0 ,
    15, 
    10, 
    2 ,
    0 ,
    24, 
    12, 
    9 ,
    27, 
    31, 
    6 ,
    2 ,
    19, 
    7 ,
    26, 
    18,
    1 ,
    16, 
    19, 
    22, 
    21, 
    17, 
    11, 
    31, 
    22, 
    30, 
    20, 
    5 ,
    32, 
    15, 
    13, 
    18, 
    12,
    32, 
    32, 
    14, 
    16, 
    31, 
    25, 
    2 ,
    25, 
    4 ,
    33, 
    11, 
    9 ,
    32, 
    20, 
    29, 
    5 ,
    2 ,
    13, 
    11, 
    21, 
    36, 
    4 ,
    32, 
    8 ,
    34, 
    25, 
    0 ,
    34, 
    14, 
    32, 
    34, 
    6 ,
    26, 
    5 ,
    10, 
    30, 
    22, 
    29, 
    12, 
    20, 
    23, 
    23, 
    36, 
    7 ,
    12, 
    36, 
    9 ,
    0 ,
    28, 
    35, 
    19, 
    15,
    24,
    27,
    35, 
    11, 
    34, 
    2 ,
    14, 
    13, 
    30, 
    34, 
    0 ,
    7 ,
    32,
    3 ,
    8 ,
    20, 
    31, 
    30, 
    25, 
    12, 
    25,
    9 ,
    13, 
    18, 
    28, 
    28, 
    24, 
    19,
    25,
    10,
    15,
    27,
    27, 
    6 ,
    31,  
    32, 
    34, 
    21, 
    17, 
    34,
    7 ,
    34, 
    33, 
    4 ,
    9 ,
    22, 
    6 ,
    6 ,
    15, 
    6 ,
    12, 
    22, 
    33, 
    2 ,
    34,
    29, 
    14, 
    30, 
    35, 
    26, 
    13, 
    19, 
    32, 
    29, 
    5 ,
    32, 
    33, 
    12, 
    33, 
    24, 
    11, 
    30,
    22,
    24,
    31,
    10,
    24, 
    20,  
    36, 
    22, 
    3 ,
    21, 
    32, 
    1 ,
    6 ,
    15, 
    28, 
    3 ,
    13, 
    5 ,
    9 ,
    31, 
    25, 
    16, 
    0,
    32, 
    8 ,
    23, 
    9 ,
    13, 
    2 ,
    6 ,
    4 ,
    22, 
    33, 
    30, 
    2 ,
    17, 
    0 ,
    29,
    7 ,
    19, 
    3 ,
    30, 
    13, 
    9 ,
    6 ,
    17, 
    6 ,
    28,  
    22, 
    28, 
    19, 
    22, 
    24, 
    28,
    1 ,
    29, 
    14, 
    30, 
    8 ,
    4 ,
    6 ,
    29,
    4 ,
    2 ,
    4 ,
    33, 
    35, 
    20,
    14, 
    17,
    5 ,
    22, 
    19, 
    35, 
    8 ,
    31,
    7 ,
    20, 
    27, 
    12, 
    20, 
    19,
    26, 
    13, 
    9 ,
    22, 
    9 ,
    8 ,
    31, 
    28, 
    31, 
    31, 
    21, 
    7 ,
    32,
    1 ,
    20, 
    20, 
    28, 
    21, 
    15, 
    15, 
    6 ,
    27, 
    2 ,
    6 ,
    29, 
    11, 
    30, 
    29, 
    14, 
    35, 
    11,
    2,
    30,
    11,
    7,
    30,
    34,
    2,
    31,
    27, 
    2 ,
    30, 
    0 ,
    8 ,
    26, 
    10, 
    21, 
    17, 
    19, 
    21, 
    21, 
    4 ,
    36, 
    10, 
    19, 
    10, 
    23, 
    28, 
    36, 
    25, 
    29, 
    23, 
    1 ,
    4,
    23,
    7,
    28,
    0 , 
    30, 
    10, 
    31, 
    1 ,
    28, 
    29, 
    23, 
    30, 
    12, 
    9 ,
    11, 
    13, 
    30, 
    25, 
    45, 
    16, 
    0 ,
    28, 
    24, 
    17, 
    23, 
    25, 
    12, 
    8,
    34,
    20,
    14, 
    24, 
    1 ,
    13, 
    11, 
    15, 
    18, 
    32, 
    2 ,
    31, 
    29, 
    7 ,
    15, 
    16, 
    24, 
    31, 
    20,
    1 ,
    21,
    21,
    28, 
    7 ,
    16, 
    29, 
    15, 
    19, 
    32, 
    1 ,
    6 ,
    28, 
    17, 
    36, 
    1 ,
    35, 
    26, 
    30, 
    33, 
    13, 
    6 ,
    7 ,
    36, 
    32, 
    11, 
    29, 
    0 ,
    36, 
    24, 
    14, 
    9 ,
    31, 
    31, 
    21, 
    20, 
    10, 
    10, 
    4 ,
    11, 
    21, 
    12,
    1 ,
    14, 
    22, 
    0 ,
    33, 
    21, 
    14,
    3 ,
    11, 
    35, 
    18, 
    3 ,
    14, 
    21, 
    18, 
    18, 
    3 ,
    20, 
    24, 
    26, 
    32, 
    13, 
    15, 
    27, 
    19, 
    25, 
    20, 
    5 ,
    4 ,
    3 ,
    10, 
    1 ,
    2 ,
    30, 
    4 ,
    27, 
    25, 
    35, 
    13, 
    14, 
    3 ,
    12, 
    14, 
    0 ,
    5 ,
    14, 
    35, 
    34, 
    34, 
    8 ,
    2 ,
    8 ,
    11, 
    9 ,
    10, 
    ]
let apuestas = [];
let apuestasEstrategia2 = [];

let rojos = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
let negros = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
let fila1 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34]
let fila2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35]
let fila3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]

let contadorRojos = 0;
let contadorNegros = 0;
let contadorPares = 0;
let contadorImpares = 0;
let contadorBajos = 0;
let contadorAltos = 0;
let contadorPrimeraDocena = 0;
let contadorSegundaDocena = 0;
let contadorTerceraDocena = 0;
let contadorPrimeraFila = 0;
let contadorSegundaFila = 0;
let contadorTerceraFila = 0;
let contadorNumeros = new Array(37);
contadorNumeros.fill(0);

let fondoCasino = 0;
let fondoEstrategia1 = 50000;
let fondoEstrategia2 = 200000;
let fondoEstrategia3 = 50000;
let fondoEstrategia4 = 50000;

let ultimaApuestaColor1 = 0;
let ultimaApuestaPar1 = 0;
let ultimaApuestaAlto1 = 0;
let ultimaApuestaDocena1 = 0;
let ultimaApuestaFila1 = 0;




const esCero = (numero) => {
    if(numero == 0){
        contadorPrimeraDocena++;
        contadorSegundaDocena++;
        contadorTerceraDocena++;
        contadorPrimeraFila++;
        contadorSegundaFila++;
        contadorTerceraFila++; 
    }
}

const esPar = (numero) => {
    if ((numero % 2) == 0 && numero != 0) {
        contadorPares++;
        contadorImpares = 0;
        //console.log(`RULETA: Es par y el contador de pares va en ${contadorPares}`);
        return true;
    }
    return false;
}

const esImpar = (numero) => {
    if (numero == 0)
        return false;
    if ((numero % 2) != 0) {
        contadorPares = 0;
        contadorImpares++;
        //console.log(`RULETA: Es impar y el contador de impar va en ${contadorImpares}`);
        return true;
    }
    return false;
}

const esNegro = (numero) => {
    if (numero == 0)
        return false;
    if (negros.includes(numero)) {
        contadorNegros++;
        contadorRojos = 0;
        //console.log(`RULETA: Es negro y el contador de negros va en ${contadorNegros}`);
        return true;
    }
    return false;
}

const esRojo = (numero) => {
    if (numero == 0)
        return false;
    if (rojos.includes(numero)) {
        contadorNegros = 0;
        contadorRojos++;
        //console.log(`RULETA: Es rojo y el contador de rojos va en ${contadorRojos}`);
        return true;
    }
    return false;
}

const esAlto = (numero) => {
    if (numero == 0)
        return false;
    if (numero < 37 && numero > 18) {
        contadorAltos++;
        contadorBajos = 0;
        //console.log(`RULETA: Es alto y el contador de altos va en ${contadorAltos}`);
        return true;
    }
    return false;
}

const esBajo = (numero) => {
    if (numero == 0)
        return false;
    if (numero < 19 && numero > 0) {
        contadorAltos = 0;
        contadorBajos++;
        //console.log(`RULETA: Es bajo y el contador de bajos va en ${contadorBajos}`);
        return true;
    }
    return false;
}

const esDocena1 = (numero) => {
    if (numero == 0)
        return false;
    if (numero > 0 && numero < 13) {
        contadorPrimeraDocena = 0;
        contadorSegundaDocena++;
        contadorTerceraDocena++;
        //console.log(`RULETA: Es primera docena y los contadores van asi DOCENA 1: ${contadorPrimeraDocena} DOCENA 2: ${contadorSegundaDocena} DOCENA 3: ${contadorTerceraDocena}`);
        return true;
    }
    return false;
}

const esDocena2 = (numero) => {
    if (numero == 0)
        return false;
    if (numero > 12 && numero < 25) {
        contadorPrimeraDocena++;
        contadorSegundaDocena = 0;
        contadorTerceraDocena++;
        //console.log(`RULETA: Es primera docena y los contadores van asi DOCENA 1: ${contadorPrimeraDocena} DOCENA 2: ${contadorSegundaDocena} DOCENA 3: ${contadorTerceraDocena}`);
        return true;
    }
    return false
}

const esDocena3 = (numero) => {
    if (numero == 0)
        return false;
    if (numero > 24 && numero < 37) {
        contadorPrimeraDocena++;
        contadorSegundaDocena++;
        contadorTerceraDocena = 0;
        //console.log(`RULETA: Es tercera docena y los contadores van asi DOCENA 1: ${contadorPrimeraDocena} DOCENA 2: ${contadorSegundaDocena} DOCENA 3: ${contadorTerceraDocena}`);
        return true;
    }
    return false;
}

const esFila1 = (numero) => {
    if (numero == 0)
        return false;
    if (fila1.includes(numero)) {
        contadorPrimeraFila = 0;
        contadorSegundaFila++;
        contadorTerceraFila++;
        //console.log(`RULETA: Es primera fila y los contadores van asi FILA 1: ${contadorPrimeraFila} FILA 2: ${contadorSegundaFila} FILA 3: ${contadorTerceraFila}`);
        return true;
    }
    return false;
}

const esFila2 = (numero) => {
    if (numero == 0)
        return false;
    if (fila2.includes(numero)) {
        contadorPrimeraFila++;
        contadorSegundaFila = 0;
        contadorTerceraFila++;
        //console.log(`RULETA: Es segunda fila y los contadores van asi FILA 1: ${contadorPrimeraFila} FILA 2: ${contadorSegundaFila} FILA 3: ${contadorTerceraFila}`);
        return true;
    }
    return false;
}

const esFila3 = (numero) => {
    if (numero == 0)
        return false;
    if (fila3.includes(numero)) {
        contadorPrimeraFila++;
        contadorSegundaFila++;
        contadorTerceraFila = 0;
        //console.log(`RULETA: Es tercera fila y los contadores van asi FILA 1: ${contadorPrimeraFila} FILA 2: ${contadorSegundaFila} FILA 3: ${contadorTerceraFila}`);
        return true;
    }
    return false;
}

const isPar = (numero) => {
    if ((numero % 2) == 0 && numero != 0) {
        return true;
    }
    return false;
}

const isImpar = (numero) => {
    if (numero == 0)
        return false;
    if ((numero % 2) != 0) {
        return true;
    }
    return false;
}

const isNegro = (numero) => {
    if (numero == 0)
        return false;
    if (negros.includes(numero)) {
        return true;
    }
    return false;
}

const isRojo = (numero) => {
    if (numero == 0)
        return false;
    if (rojos.includes(numero)) {
        return true;
    }
    return false;
}

const isAlto = (numero) => {
    if (numero == 0)
        return false;
    if (numero < 37 && numero > 18) {
        return true;
    }
    return false;
}

const isBajo = (numero) => {
    if (numero == 0)
        return false;
    if (numero < 19 && numero > 0) {
        return true;
    }
    return false;
}

const isDocena1 = (numero) => {
    if (numero == 0)
        return false;
    if (numero > 0 && numero < 13) {
        return true;
    }
    return false;
}

const isDocena2 = (numero) => {
    if (numero == 0)
        return false;
    if (numero > 12 && numero < 25) {
       return true;
    }
    return false
}

const isDocena3 = (numero) => {
    if (numero == 0)
        return false;
    if (numero > 24 && numero < 37) {
         return true;
    }
    return false;
}

const isFila1 = (numero) => {
    if (numero == 0)
        return false;
    if (fila1.includes(numero)) {
       return true;
    }
    return false;
}

const isFila2 = (numero) => {
    if (numero == 0)
        return false;
    if (fila2.includes(numero)) {
        return true;
    }
    return false;
}

const isFila3 = (numero) => {
    if (numero == 0)
        return false;
    if (fila3.includes(numero)) {
        return true;
    }
    return false;
}

const esNumero =  (numero) => {
    contadorNumeros = contadorNumeros.map((item) => {
        return item + 1;
    });
    contadorNumeros[numero] = 0;
}

const correr = async (numero) => {
    ruleta.push(numero);
    console.log(`RULETA: Nuevo numero lanzado ${numero}`);
    await validar();
    await resolverApuestas();
    await validarEstrategiasPailas();
    await limpiarApuestas();
    await correrEstrategias();
    await imprimirEstado();
    
}

const validar = async () => {
    const last = ruleta[ruleta.length - 1];
    esAlto(last)
    esBajo(last)
    esPar(last)
    esImpar(last)
    esRojo(last)
    esNegro(last)
    esDocena1(last)
    esDocena2(last)
    esDocena3(last)
    esFila1(last)
    esFila2(last)
    esFila3(last)
    esNumero(last)
}

const imprimirEstado = async () => {
    /* console.log("ESTADO: El estado actual de los contadores ", {
        contadorAltos,
        contadorBajos,
        contadorPares,
        contadorImpares,
        contadorNegros,
        contadorRojos,
        contadorPrimeraDocena,
        contadorSegundaDocena,
        contadorTerceraDocena,
        contadorPrimeraFila,
        contadorSegundaFila,
        contadorTerceraFila
    });
    console.log("ESTADO: Fondo actual de jugadores", {
        fondoEstrategia1,
        fondoEstrategia2,
        fondoEstrategia3,
        fondoEstrategia4,
    });
    console.log("ESTADO: Fondo ruleta", {
        fondoCasino
    }); */
    console.log("ESTADO: Ruleta total", ruleta);
    console.log("ESTADO: Apuestas", {
        apuestasEstrategia1: apuestas,
        apuestasEstrategia2
    }); 
    
    
}


const correrEstrategias = async () => {
    estrategia1();
    estrategia2();
    //estrategia3();
}

/** Si el jugador gana x cifra */
const gano = (jugador, cantidad, fondo) => {
    //console.log(`APUESTAS: El jugador ${jugador} ganó $${cantidad}, su fondo está en $${fondo}`)
}

/** Si el jugador pierde x cifra */
const perdio = (jugador, cantidad, fondo) => {
    //console.log(`APUESTAS: El jugador ${jugador} perdió $${cantidad}, su fondo está en $${fondo}`)
}

/** Si el jugador llego a 0 en sus fondos */
const gameOver = (jugador) => {
    //console.log(`APUESTAS: El jugador ${jugador} perdió TODO`)
}

const apostar = (jugador, apuesta, razon) => {
    //console.log(`APUESTAS: El jugador ${jugador} apuesta ${apuesta} a ${razon}`)
    apuestas.push({ jugador, apuesta, razon, status: false});
}

const apostar2 = (jugador, apuesta, razon, numeros) => {
    console.log(`APUESTAS: El jugador ${jugador} apuesta ${apuesta} a ${razon}`)
    apuestasEstrategia2.push({ jugador, apuesta, razon, numeros, status: false});
}


/** Esta estrategia consiste en apostar desde 500 duplicando apuestas a las repeticiones de color, paridad, altura x3 - docenas y filas x7 */
const estrategia1 = async () => {
    const banderaColor = 3;
    const banderaPar = 3;
    const banderaAltura = 3;
    const banderaDocenas = 10;
    const banderaFilas = 10;

    

    const last = ruleta[ruleta.length - 1];
    if (fondoEstrategia1 <= 0) {
        gameOver(1);
        return
    }
    //CASO 1: Rojos mayores a constante definida al principio
    if (contadorRojos > banderaColor) {
        if (ultimaApuestaColor1 > 0) {
            ultimaApuestaColor1 = ultimaApuestaColor1 * 2;
            apostar(1, ultimaApuestaColor1, RAZON_NEGRO)
            fondoEstrategia1 -= ultimaApuestaColor1;
        } else {
            ultimaApuestaColor1 = 500;
            apostar(1, 500, RAZON_NEGRO)
            fondoEstrategia1 -= 500;

        }
    }
    //CASO 2: Negros mayores a constante definida al principio
    if (contadorNegros > banderaColor) {
        if (ultimaApuestaColor1 > 0) {
            ultimaApuestaColor1 = ultimaApuestaColor1 * 2;
            apostar(1, ultimaApuestaColor1, RAZON_ROJO)
            fondoEstrategia1 -= ultimaApuestaColor1;

        } else {
            ultimaApuestaColor1 = 500;
            apostar(1, 500, RAZON_ROJO)
            fondoEstrategia1 -= 500;

        }
    }
    //CASO 3: Par mayores a constante definida al principio
    if (contadorPares > banderaPar) {
        if (ultimaApuestaPar1 > 0) {
            ultimaApuestaPar1 = ultimaApuestaPar1 * 2;
            apostar(1, ultimaApuestaPar1, RAZON_IMPAR)
            fondoEstrategia1 -= ultimaApuestaPar1;

        } else {
            ultimaApuestaPar1 = 500;
            apostar(1, 500, RAZON_IMPAR)
            fondoEstrategia1 -= 500;

        }
    }
    //CASO 4: Impar mayores a constante definida al principio
    if (contadorImpares > banderaPar) {
        if (ultimaApuestaPar1 > 0) {
            ultimaApuestaPar1 = ultimaApuestaPar1 * 2;
            apostar(1, ultimaApuestaPar1, RAZON_PAR)
            fondoEstrategia1 -= ultimaApuestaPar1;

        } else {
            ultimaApuestaPar1 = 500;
            apostar(1, 500, RAZON_PAR)
            fondoEstrategia1 -= 500;
        }
    }
    //CASO 5: Altos mayores a constante definida al principio
    if (contadorAltos > banderaAltura) {
        if (ultimaApuestaAlto1 > 0) {
            ultimaApuestaAlto1 = ultimaApuestaAlto1 * 2;
            apostar(1, ultimaApuestaAlto1, RAZON_BAJO)
            fondoEstrategia1 -= ultimaApuestaAlto1;

        } else {
            ultimaApuestaAlto1 = 500;
            apostar(1, 500, RAZON_BAJO)
            fondoEstrategia1 -= ultimaApuestaAlto1;
        }
    }
    //CASO 6: Bajos mayores a constante definida al principio
    if (contadorBajos > banderaAltura) {
        if (ultimaApuestaAlto1 > 0) {
            ultimaApuestaAlto1 = ultimaApuestaAlto1 * 2;
            apostar(1, ultimaApuestaAlto1, RAZON_ALTO)
            fondoEstrategia1 -= ultimaApuestaAlto1;

        } else {
            ultimaApuestaAlto1 = 500;
            apostar(1, 500, RAZON_ALTO)
            fondoEstrategia1 -= ultimaApuestaAlto1;

        }
    }
    //CASO 7: Docena 1 mayores a constante definida al principio
    if (contadorPrimeraDocena > banderaDocenas) {
        if (ultimaApuestaDocena1 > 0) {
            ultimaApuestaDocena1 = ultimaApuestaDocena1 * 2;
            apostar(1, ultimaApuestaDocena1, RAZON_DOCENA1)
            fondoEstrategia1 -= ultimaApuestaDocena1;

        } else {
            ultimaApuestaDocena1 = 500;
            apostar(1, 500, RAZON_DOCENA1)
            fondoEstrategia1 -= ultimaApuestaDocena1;
        }
    }
    //CASO 8: Docena 2 mayores a constante definida al principio
    if (contadorSegundaDocena > banderaDocenas) {
        if (ultimaApuestaDocena1 > 0) {
            ultimaApuestaDocena1 = ultimaApuestaDocena1 * 2;
            apostar(1, ultimaApuestaDocena1, RAZON_DOCENA2)
            fondoEstrategia1 -= ultimaApuestaDocena1;
        } else {
            ultimaApuestaDocena1 = 500;
            apostar(1, 500, RAZON_DOCENA2)
            fondoEstrategia1 -= ultimaApuestaDocena1;
        }
    }
    //CASO 9: Docena 3 mayores a constante definida al principio
    if (contadorTerceraDocena > banderaDocenas) {
        if (ultimaApuestaDocena1 > 0) {
            ultimaApuestaDocena1 = ultimaApuestaDocena1 * 2;
            apostar(1, ultimaApuestaDocena1, RAZON_DOCENA3)
            fondoEstrategia1 -= ultimaApuestaDocena1;

        } else {
            ultimaApuestaDocena1 = 500;
            apostar(1, 500, RAZON_DOCENA3)
            fondoEstrategia1 -= ultimaApuestaDocena1;
        }
    }
    //CASO 10: Fila 1 mayores a constante definida al principio
    if (contadorPrimeraFila > banderaFilas) {
        if (ultimaApuestaFila1 > 0) {
            ultimaApuestaFila1 = ultimaApuestaFila1 * 2;
            apostar(1, ultimaApuestaFila1, RAZON_FILA1)
            fondoEstrategia1 -= ultimaApuestaFila1;
        } else {
            ultimaApuestaFila1 = 500;
            apostar(1, 500, RAZON_FILA1)
            fondoEstrategia1 -= ultimaApuestaFila1;
        }
    }
    //CASO 11: Fila 2 mayores a constante definida al principio
    if (contadorSegundaFila > banderaFilas) {
        if (ultimaApuestaFila1 > 0) {
            ultimaApuestaFila1 = ultimaApuestaFila1 * 2;
            apostar(1, ultimaApuestaFila1, RAZON_FILA2)
            fondoEstrategia1 -= ultimaApuestaFila1;
        } else {
            ultimaApuestaFila1 = 500;
            apostar(1, 500, RAZON_FILA2)
            fondoEstrategia1 -= ultimaApuestaFila1;
        }
    }
    //CASO 12: Fila 3 mayores a constante definida al principio
    if (contadorTerceraFila > banderaFilas) {
        if (ultimaApuestaFila1 > 0) {
            ultimaApuestaFila1 = ultimaApuestaFila1 * 2;
            apostar(1, ultimaApuestaFila1, RAZON_FILA3)
            fondoEstrategia1 -= ultimaApuestaFila1;
        } else {
            ultimaApuestaFila1 = 500;
            apostar(1, 500, RAZON_FILA3)
            fondoEstrategia1 -= ultimaApuestaFila1;
        }
    }
}

const estrategia2 = async () => {
    const last = ruleta[ruleta.length - 1];
    const contadorRepeticionNumeros = 36;
    const apuestaMinima = 500;
    if (fondoEstrategia2 <= 0) {
        gameOver(2);
        return
    }
    for(let i = 0; i < 37; i++){
        if(contadorNumeros[i] >= contadorRepeticionNumeros){
            apostar2(2, apuestaMinima, RAZON_NUMEROS, [i])
            fondoEstrategia2 -= apuestaMinima;
        }
    }
}

const resolverApuestas = () => {
    resolverApuestasEstrategia1();
    resolverApuestasEstrategia2();
}

const limpiarApuestas = () => {
    //console.log("RULETA: limpiando apuestas", apuestas);
    for (let apuesta of apuestas){
        if(!apuesta.status)
            fondoCasino += apuesta.apuesta;
    } 
    for (let apuesta of apuestasEstrategia2){
        if(!apuesta.status)
            fondoCasino += apuesta.apuesta;
    }
    apuestas = [];
    apuestasEstrategia2 = [];
 }


const resolverApuestasEstrategia1 = async () => {
    const last = ruleta[ruleta.length - 1];
    for(let apuesta of apuestas){
        switch (apuesta.razon) {
            case RAZON_PAR:
                if (isPar(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_PAR;
                    //console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_PAR) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_PAR) - apuesta.apuesta);
                    apuesta.status = true;
                    //console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_PAR} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                    ultimaApuestaPar1 = 0;
                } else {
                    //console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_IMPAR:
                if (isImpar(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_PAR;
                    //console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_PAR) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_PAR) - apuesta.apuesta);
                    apuestas = apuestas.filter((item) => item != apuesta)
                    ultimaApuestaPar1 = 0;
                    apuesta.status = true;
                    //console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_PAR} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon} `);
                } else {
                    //console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_ROJO:
                if (isRojo(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_COLOR;
                    //console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_COLOR) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_COLOR) - apuesta.apuesta);
                    apuestas = apuestas.filter((item) => item != apuesta)
                    ultimaApuestaColor1 = 0;
                    apuesta.status = true;
                    //console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_COLOR} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    //console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_NEGRO:
                if (isNegro(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_COLOR;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_COLOR) - apuesta.apuesta);
                    //console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_COLOR) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta)
                    ultimaApuestaColor1 = 0;
                    apuesta.status = true;
                    //console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_COLOR} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon} `);
                } else {
                    //console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_ALTO:
                if (isAlto(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_ALTO;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_ALTO) - apuesta.apuesta);
                    //console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_ALTO) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta)
                    ultimaApuestaAlto1 = 0;
                    apuesta.status = true;
                    //console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_ALTO} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    //console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_BAJO:
                if (isBajo(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_ALTO;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_ALTO) - apuesta.apuesta);
                    //console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_ALTO) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta)
                    ultimaApuestaAlto1 = 0;
                    apuesta.status = true;
                    //console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_ALTO} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    //console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_DOCENA1:
                if (isDocena1(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_DOCENAS;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_DOCENAS) - apuesta.apuesta);
                    //console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_DOCENAS) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta);
                    ultimaApuestaDocena1 = 0;
                    apuesta.status = true;
                    //console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_DOCENAS} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    //console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_DOCENA2:
                if (isDocena2(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_DOCENAS;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_DOCENAS) - apuesta.apuesta);
                    apuesta.status = true;
                    //console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_DOCENAS) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)

                    apuestas = apuestas.filter((item) => item != apuesta);
                    ultimaApuestaDocena1 = 0;
                    //console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_DOCENAS} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    //console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_DOCENA3:
                if (isDocena3(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_DOCENAS;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_DOCENAS) - apuesta.apuesta);
                    //console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_DOCENAS) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta);
                    ultimaApuestaDocena1 = 0;
                    apuesta.status = true;
                    //console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_DOCENAS} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    //console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_FILA1:
                if (isFila1(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_FILAS;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_FILAS) - apuesta.apuesta);
                    //console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_FILAS) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta);
                    ultimaApuestaFila1 = 0;
                    //console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_FILAS} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    //console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_FILA2:
                if (isFila2(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_FILAS;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_FILAS) - apuesta.apuesta);
                    //console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_FILAS) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta);
                    ultimaApuestaFila1 = 0;
                    apuesta.status = true;
                    //console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_FILAS} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    //console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_FILA3:
                if (isFila3(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_FILAS;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_FILAS) - apuesta.apuesta);
                    //console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_FILAS) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta);
                    ultimaApuestaFila1 = 0;
                    apuesta.status = true;
                    //console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_FILAS} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    //console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            default:
                //console.log('ERROR: NINGUNA RAZON ???');
        }
    }
}

const resolverApuestasEstrategia2 = async () => {
    const last = ruleta[ruleta.length - 1];
    const bet = 36;
    let multiplicador = 0;
    for(let apuesta of apuestasEstrategia2){  
        //console.log("Bug Fixing: validando apuesta jugador 2", apuesta)
        switch (apuesta.razon){
            case RAZON_NUMEROS:
                //console.log("Bug fixing: includes apuesta jugador 2", apuesta.numeros.includes(last))

                if(apuesta.numeros.includes(last)){
                    multiplicador = bet / apuesta.numeros.length;                    
                    fondoEstrategia2 += apuesta.apuesta * multiplicador;
                    //console.log(`BUGFIXING: El jugador 2 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * multiplicador) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    fondoCasino -= ((apuesta.apuesta * multiplicador) - apuesta.apuesta);
                    apuesta.status = true;
                    //console.log(`GANANCIAS: El jugador 2 ha ganado $${apuesta.apuesta * multiplicador} su saldo es de $${fondoEstrategia2} apostandole a ${apuesta.razon}  con los numeros ${JSON.stringify(apuesta.numeros)}`);
                }else{
                    //console.log(`GANANCIAS: El jugador 2 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia2} apostandole a ${apuesta.razon} con los numeros ${JSON.stringify(apuesta.numeros)}`);

                }
            default: 
                //console.log("BUGFIXING: Default ", apuesta)
                break
        }   
    }
}

const validarEstrategiasPailas =  async () =>{
    if(fondoEstrategia1 <= 0){
        gameOver(1)
    }
    if(fondoEstrategia2 <= 0){
        gameOver(2)
    }
    if(fondoEstrategia3 <= 0){
        gameOver(3)
    }
}

const procesarNumero = async () => {
   /*   for(let numero of numerosAuto){
    if(numero && Number(numero) > -1 && Number(numero) < 37){
        await correr(Number(numero));
    }
    }  */
    let numero = document.getElementById("numero").value;
    console.log("Procesar numero", numero);
    if(numero && Number(numero) > -1 && Number(numero) < 37){
        await correr(Number(numero));
    }
}

