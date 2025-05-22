function Especies(nome, especie, altura, gordura) {
    this.nome = nome;
    this.especie = especie;
    this.altura = altura;
    this.gordura = gordura;
}

function Cavalo(nome) {
    Especies.call(this, nome, "Cavalo", altura, gordura)
    }

function Cachorro(nome) {
    Especies.call(this, nome, "Cachorro", altura, gordura)    
}

function Gato(nome) {
    Especies.call(this, nome, "Gato")

}
function Sussuarana(nome) {
    Especies.call(this, nome, "Sussuarana")
}

const Cachorro1 = new Especies("John", "Cachorro", "80 Centimetros", "20 Kilos");
const Gato1 = new Especies("Pedrinho", "Gato", "46 Centimetros", "6 Kilos");
const Cavalo1 = new Especies("Paulinho", "Cavalo", "150 Centimetros", "400 Kilos" );
const Sussuarana1 = new Especies("Jonas", "Sussuarana","220 Centimetros", "62 Kilos")

