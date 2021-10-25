
let firstStop;
let lastStop;
let selectLine;
const firstLine = ['p01', 'p02', 'p03', 'p04', 'p05', 'p06', 'p07', 'p08', 'p09', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15', 'p16', 'p17', 'p18', 'p19'];

const secondLine = ['p20', 'p21', 'p22', 'p23', 'p24', 'p09', 'p08', 'p35', 'p36', 'p37', 'p25', 'p26', 'p27', 'p28', 'p29', 'p30', 'p31', 'p17', 'p18', 'p32', 'p33', 'p34'];



function recognizeFirstStop(first) {
    return first === firstStop
};

function recognizeLastStop(last) {
    return last === lastStop
};



const runVoyage = (line, selectFirstStop, selectLastStop) => {
    let wallet = 20;
    let deposit = 20;
    wallet -= deposit;
    selectLine = line;
    firstStop = selectFirstStop;
    lastStop = selectLastStop;
    let stops = 0;
    let i = 0;
    let payment = 0;

    if (selectLine === 'firstLine') {
        firstStop = firstLine.findIndex(recognizeFirstStop);
        lastStop = firstLine.findIndex(recognizeLastStop);
    } else if (selectLine === 'secondLine') {
        firstStop = secondLine.findIndex(recognizeFirstStop);
        lastStop = secondLine.findIndex(recognizeLastStop);
    }

    for (i = firstStop; firstStop < lastStop ? i <= lastStop : i >= lastStop; firstStop < lastStop ? i++ : i--) {

        if (stops == 1) {
            payment += 0.7;
        } else if (stops == 2) {
            payment += 0.6
        } else if (stops == 3) {
            payment += 0.4
        } else if (stops > 3 && stops <= 5) {
            payment += 0.2
        } else if (stops > 5 && stops <= 9) {
            payment += 0.15
        } else if (stops > 9 && stops <= 13) {
            payment += 0.1
        } else if (stops > 13 && stops <= 16) {
            payment += 0.08
        } else if (stops > 16 && stops <= 25) {
            payment += 0.04
        } else if (stops > 25) {
            payment += 0
        }

        stops++

    }

    deposit -= payment
    wallet += deposit
    console.log(`Opłata wynosi ${Math.round(payment * 100) / 100} zl. Zwrócono ${Math.round(deposit * 100) / 100} zl`)

};



//symulaca pierwsza
console.log('symulacja pierwsza')

runVoyage('firstLine', 'p03', 'p10')

//symulaca druga
console.log('symulacja druga')

runVoyage('firstLine', 'p10', 'p18')

//symulaca trzecia
console.log('symulacja trzecia')

runVoyage('secondLine', 'p18', 'p08')