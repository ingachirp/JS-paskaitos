function lyginiaiSkaiciai(ikiSk) {
    for (let indeksas = 2; indeksas <= ikiSk; indeksas = indeksas + 1) {
        const liekana = indeksas % 2; // padalinti ir grazinti nedaloma liekana
        if (liekana !== 0) {
            continue;
        }
        console.log(indeksas)
    }
}



lyginiaiSkaiciai(100)

