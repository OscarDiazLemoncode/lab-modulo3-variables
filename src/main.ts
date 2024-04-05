import './style.css';

//Variables de estilos personalizados css para consola
const customTitle =
  'font-weight:bold; font-size:1.5rem; background-color:#dfffdf;';

//Definición de interfaz para grupo musical
interface GrupoMusical {
  nombreGrupo: string;
  cantante: string;
  compositor: string;
  añoFundo: number;
  activo: boolean;
  generoMusical: string;
}

// The Beatles
const beatles: GrupoMusical = {
  nombreGrupo: 'The Beatles',
  cantante: 'John Lennon',
  compositor: 'Paul McCartney',
  añoFundo: 1960,
  activo: false,
  generoMusical: 'pop/rock ',
};
// Queen
const queen: GrupoMusical = {
  nombreGrupo: 'Queen',
  cantante: 'Freddie Mercury',
  compositor: 'Freddie Mercury',
  añoFundo: 1970,
  activo: false,
  generoMusical: 'rock ',
};
// AC / DC
const acdc: GrupoMusical = {
  nombreGrupo: 'AC / DC',
  cantante: 'Brian Johnson',
  compositor: 'Brian Johnson',
  añoFundo: 1973,
  activo: false,
  generoMusical: 'hard rock',
};
// Ludwig van Beethoven
const lvB: GrupoMusical = {
  nombreGrupo: 'Ludwig van Beethoven',
  cantante: ' Ludwig van Beethoven',
  compositor: ' Ludwig van Beethoven',
  añoFundo: 1770,
  activo: false,
  generoMusical: 'música clásica ',
};
// The Rolling Stones
const rollingS: GrupoMusical = {
  nombreGrupo: 'The Rolling Stones',
  cantante: ' The Rolling Stones',
  compositor: ' Ludwig van Beethoven',
  añoFundo: 1962,
  activo: false,
  generoMusical: 'rock',
};

console.log(`%c${beatles.nombreGrupo}`, customTitle);
console.table(beatles);

console.log(`%c${queen.nombreGrupo}`, customTitle);
console.table(queen);

console.log(`%c${acdc.nombreGrupo}`, customTitle);
console.table(acdc);

console.log(`%c${lvB.nombreGrupo}`, customTitle);
console.table(lvB);

console.log(`%c${rollingS.nombreGrupo}`, customTitle);
console.table(rollingS);
