

function skaiciuotiFaktoriala (skaicius) { // 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2
    let atsakymas = 1;
    for (let dabartinisSkaicius = skaicius; dabartinisSkaicius > 1; dabartinisSkaicius = dabartinisSkaicius - 1) {
        console.log ("dabartinisSkaicius", dabartinisSkaicius)
        atsakymas = atsakymas * dabartinisSkaicius
    }
console.log ("skaicius" + skaicius + "faktorialas yra" + atsakymas)
}


skaiciuotiFaktoriala(10);

for (let i = 0; i < 10; i++) {

}

let skaicius = 0;
skaicius = skaicius + 1;
skaicius += 1;
skaicius++;