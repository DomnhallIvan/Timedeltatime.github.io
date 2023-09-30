
class Poligono_Regular_Shido {
    constructor(lados) {
        this.lados = lados;
    }

    obtenerPerimetro() {
        return this.lados.reduce((a, b) => a + b, 0);
    }

    obtenerArea() {
        return "Fallo en Área";
    }
}

class Cuadrado extends Poligono_Regular_Shido {
    obtenerArea() {
        if (this.lados.length === 4) {
            return this.lados[0] ** 2;
        } else {
            return "Fallo en Área";
        }
    }

    obtenerPerimetro() {
        return this.lados[0] * 4;
    }
}

class Triangulo extends Poligono_Regular_Shido {
    obtenerArea() {
        if (this.lados.length === 3) {
            const [a, b, c] = this.lados;
            const l = this.obtenerPerimetro() / 2;
            return Math.sqrt(l * (l - a) * (l - b) * (l - c));
        } else {
            return "Fallo en Área";
        }
    }

    obtenerPerimetro() {
        return this.lados[0]*3;
    }
}



class Pentagono extends Poligono_Regular_Shido {
    obtenerArea() {
        if (this.lados.length === 5) {
            const lado = this.lados[0];
            return (5 * lado ** 2) / (4 * Math.tan(Math.PI / 5));
        } else {
            return "Bruh";
        }
    }

    obtenerPerimetro() {
        return this.lados[0] * 5;
    }
}


const triangulo = new Triangulo([6, 6, 6]);
console.log(`Área del triángulo: ${triangulo.obtenerArea()}`);
console.log(`Perímetro del triángulo: ${triangulo.obtenerPerimetro()}`);

const cuadrado = new Cuadrado([5, 5, 5, 5]);
console.log(`Área del cuadrado: ${cuadrado.obtenerArea()}`);
console.log(`Perímetro del cuadrado: ${cuadrado.obtenerPerimetro()}`);

const pentagono = new Pentagono([2, 2, 2, 2, 2]);
console.log(`Área del pentágono: ${pentagono.obtenerArea()}`);
console.log(`Perímetro del pentágono: ${pentagono.obtenerPerimetro()}`);

