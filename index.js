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

const MULTIPLICADOR_COLOR = 2;
const MULTIPLICADOR_PAR = 2;
const MULTIPLICADOR_ALTO = 2;
const MULTIPLICADOR_DOCENAS = 3;
const MULTIPLICADOR_FILAS = 3;

let ruleta = [];
let apuestas = [];

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

let fondoCasino = 0;
let fondoEstrategia1 = 50000;
let fondoEstrategia2 = 50000;
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
        console.log(`RULETA: Es par y el contador de pares va en ${contadorPares}`);
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
        console.log(`RULETA: Es impar y el contador de impar va en ${contadorImpares}`);
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
        console.log(`RULETA: Es negro y el contador de negros va en ${contadorNegros}`);
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
        console.log(`RULETA: Es rojo y el contador de rojos va en ${contadorRojos}`);
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
        console.log(`RULETA: Es alto y el contador de altos va en ${contadorAltos}`);
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
        console.log(`RULETA: Es bajo y el contador de bajos va en ${contadorBajos}`);
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
        console.log(`RULETA: Es primera docena y los contadores van asi DOCENA 1: ${contadorPrimeraDocena} DOCENA 2: ${contadorSegundaDocena} DOCENA 3: ${contadorTerceraDocena}`);
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
        console.log(`RULETA: Es primera docena y los contadores van asi DOCENA 1: ${contadorPrimeraDocena} DOCENA 2: ${contadorSegundaDocena} DOCENA 3: ${contadorTerceraDocena}`);
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
        console.log(`RULETA: Es tercera docena y los contadores van asi DOCENA 1: ${contadorPrimeraDocena} DOCENA 2: ${contadorSegundaDocena} DOCENA 3: ${contadorTerceraDocena}`);
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
        console.log(`RULETA: Es primera fila y los contadores van asi FILA 1: ${contadorPrimeraFila} FILA 2: ${contadorSegundaFila} FILA 3: ${contadorTerceraFila}`);
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
        console.log(`RULETA: Es segunda fila y los contadores van asi FILA 1: ${contadorPrimeraFila} FILA 2: ${contadorSegundaFila} FILA 3: ${contadorTerceraFila}`);
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
        console.log(`RULETA: Es tercera fila y los contadores van asi FILA 1: ${contadorPrimeraFila} FILA 2: ${contadorSegundaFila} FILA 3: ${contadorTerceraFila}`);
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
}

const imprimirEstado = async () => {
    console.log("ESTADO: El estado actual de los contadores ", {
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
    });
    console.log("ESTADO: Ruleta total", ruleta);
    console.log("ESTADO: Apuestas", apuestas);
}


const correrEstrategias = async () => {
    estrategia1();
    //estrategia2();
    //estrategia3();
}

/** Si el jugador gana x cifra */
const gano = (jugador, cantidad, fondo) => {
    console.log(`APUESTAS: El jugador ${jugador} ganó $${cantidad}, su fondo está en $${fondo}`)
}

/** Si el jugador pierde x cifra */
const perdio = (jugador, cantidad, fondo) => {
    console.log(`APUESTAS: El jugador ${jugador} perdió $${cantidad}, su fondo está en $${fondo}`)
}

/** Si el jugador llego a 0 en sus fondos */
const gameOver = (jugador) => {
    console.log(`APUESTAS: El jugador ${jugador} perdió TODO`)
}

const apostar = (jugador, apuesta, razon) => {
    console.log(`APUESTAS: El jugador ${jugador} apuesta ${apuesta} a ${razon}`)
    apuestas.push({ jugador, apuesta, razon, status: false});
}


/** Esta estrategia consiste en apostar desde 500 duplicando apuestas a las repeticiones de color, paridad, altura x3 - docenas y filas x7 */
const estrategia1 = async () => {
    const banderaColor = 3;
    const banderaPar = 3;
    const banderaAltura = 3;
    const banderaDocenas = 7;
    const banderaFilas = 7;

    

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

const resolverApuestas = () => {
    resolverApuestasEstrategia1();
}

const limpiarApuestas = () => {
    console.log("RULETA: limpiando apuestas", apuestas);
    for (let apuesta of apuestas){
        if(!apuesta.status)
            fondoCasino += apuesta.apuesta;
    }
    apuestas = [];
 }


const resolverApuestasEstrategia1 = async () => {
    const last = ruleta[ruleta.length - 1];
    for(let apuesta of apuestas){
        switch (apuesta.razon) {
            case RAZON_PAR:
                if (isPar(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_PAR;
                    console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_PAR) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_PAR) - apuesta.apuesta);
                    apuesta.status = true;
                    console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_PAR} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                    ultimaApuestaPar1 = 0;
                } else {
                    console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_IMPAR:
                if (isImpar(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_PAR;
                    console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_PAR) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_PAR) - apuesta.apuesta);
                    apuestas = apuestas.filter((item) => item != apuesta)
                    ultimaApuestaPar1 = 0;
                    apuesta.status = true;
                    console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_PAR} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon} `);
                } else {
                    console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_ROJO:
                if (isRojo(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_COLOR;
                    console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_COLOR) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_COLOR) - apuesta.apuesta);
                    apuestas = apuestas.filter((item) => item != apuesta)
                    ultimaApuestaColor1 = 0;
                    apuesta.status = true;
                    console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_COLOR} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_NEGRO:
                if (isNegro(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_COLOR;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_COLOR) - apuesta.apuesta);
                    console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_COLOR) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta)
                    ultimaApuestaColor1 = 0;
                    apuesta.status = true;
                    console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_COLOR} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon} `);
                } else {
                    console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_ALTO:
                if (isAlto(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_ALTO;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_ALTO) - apuesta.apuesta);
                    console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_ALTO) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta)
                    ultimaApuestaAlto1 = 0;
                    apuesta.status = true;
                    console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_ALTO} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_BAJO:
                if (isBajo(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_ALTO;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_ALTO) - apuesta.apuesta);
                    console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_ALTO) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta)
                    ultimaApuestaAlto1 = 0;
                    apuesta.status = true;
                    console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_ALTO} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_DOCENA1:
                if (isDocena1(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_DOCENAS;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_DOCENAS) - apuesta.apuesta);
                    console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_DOCENAS) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta);
                    ultimaApuestaDocena1 = 0;
                    apuesta.status = true;
                    console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_DOCENAS} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_DOCENA2:
                if (isDocena2(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_DOCENAS;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_DOCENAS) - apuesta.apuesta);
                    apuesta.status = true;
                    console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_DOCENAS) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)

                    apuestas = apuestas.filter((item) => item != apuesta);
                    ultimaApuestaDocena1 = 0;
                    console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_DOCENAS} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_DOCENA3:
                if (isDocena3(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_DOCENAS;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_DOCENAS) - apuesta.apuesta);
                    console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_DOCENAS) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta);
                    ultimaApuestaDocena1 = 0;
                    apuesta.status = true;
                    console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_DOCENAS} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_FILA1:
                if (isFila1(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_FILAS;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_FILAS) - apuesta.apuesta);
                    console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_FILAS) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta);
                    ultimaApuestaFila1 = 0;
                    console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_FILAS} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_FILA2:
                if (isFila2(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_FILAS;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_FILAS) - apuesta.apuesta);
                    console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_FILAS) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta);
                    ultimaApuestaFila1 = 0;
                    apuesta.status = true;
                    console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_FILAS} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            case RAZON_FILA3:
                if (isFila3(last)) {
                    fondoEstrategia1 += apuesta.apuesta * MULTIPLICADOR_FILAS;
                    fondoCasino -= ((apuesta.apuesta * MULTIPLICADOR_FILAS) - apuesta.apuesta);
                    console.log(`BUGFIXING: El jugador 1 aposto $${apuesta.apuesta} se le restará $${((apuesta.apuesta * MULTIPLICADOR_FILAS) - apuesta.apuesta)} al fondo del casino $${fondoCasino}`)
                    apuestas = apuestas.filter((item) => item != apuesta);
                    ultimaApuestaFila1 = 0;
                    apuesta.status = true;
                    console.log(`GANANCIAS: El jugador 1 ha ganado $${apuesta.apuesta * MULTIPLICADOR_FILAS} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                } else {
                    console.log(`GANANCIAS: El jugador 1 ha perdido $${apuesta.apuesta} su saldo es de $${fondoEstrategia1} apostandole a ${apuesta.razon}`);
                }
                break;
            default:
                console.log('ERROR: NINGUNA RAZON ???');
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
    let numero = document.getElementById("numero").value;
    console.log("Procesar numero", numero);
    if(numero && Number(numero) > -1 && Number(numero) < 37){
        await correr(Number(numero));
    }
}

