class Prodotto {
  constructor(public nome: string, public prezzo: number) {}
} 
class Magazzino {
 prodotti: Prodotto[] = [];

aggiungiProdotto(prodotto: Prodotto): void {
    this.prodotti.push(prodotto);
  }
rimuoviProdotto(nome: string): void {
    this.prodotti = this.prodotti.filter((prodotto) => prodotto.nome !== nome);
  }
ordinaProdotti(): void {
    this.quickSort(this.prodotti, 0, this.prodotti.length - 1);
  }
quickSort(arr: Prodotto[], left: number, right: number): void {
    if (left < right) {
      const pivotIndex = this.partition(arr, left, right);
      this.quickSort(arr, left, pivotIndex - 1);
      this.quickSort(arr, pivotIndex + 1, right);
    }
  }
partition(arr: Prodotto[], left: number, right: number): number {
    const pivot = arr[right].prezzo;
    let i = left - 1;

    for (let x = left; x < right; x++) {
      if (arr[x].prezzo <= pivot) {
        i++;
        this.swap(arr, i, x);
      }
    }
    this.swap(arr, i + 1, right);
    return i + 1;
  }
swap(arr: Prodotto[], i: number, x: number): void {
    const temp = arr[i];
    arr[i] = arr[x];
    arr[x] = temp;
  }
calcolaValoreTotale(): number {
    let valoreTotale = 0;

    for (const prodotto of this.prodotti) {
      valoreTotale += prodotto.prezzo;
    }
     return valoreTotale;
  }
}
const magazzino = new Magazzino();

const prodotto1 = new Prodotto("Camicia", 40);
const prodotto2 = new Prodotto("Scarpe", 90);
const prodotto3 = new Prodotto("Borsa", 300);
const prodotto4 = new Prodotto("Pantaloni", 45);
const prodotto5 = new Prodotto("Vestito", 105);
const prodotto6 = new Prodotto("Scarpe con tacco", 85);
const prodotto7 = new Prodotto("Inglesine", 120);
const prodotto8 = new Prodotto("Abito corto", 78);
const prodotto9 = new Prodotto("Abito con coda", 450);
const prodotto10 = new Prodotto("Cravatta", 30);
const prodotto11 = new Prodotto("Blusa", 40);
const prodotto12 = new Prodotto("Fiocco", 20);
const prodotto13 = new Prodotto("Camicia blu", 55);
const prodotto14 = new Prodotto("Abito completo", 450);
const prodotto15 = new Prodotto("Scarpe basse", 105);

magazzino.aggiungiProdotto(prodotto1);
magazzino.aggiungiProdotto(prodotto2);
magazzino.aggiungiProdotto(prodotto3);
magazzino.aggiungiProdotto(prodotto4);
magazzino.aggiungiProdotto(prodotto5);
magazzino.aggiungiProdotto(prodotto6);
magazzino.aggiungiProdotto(prodotto7);
magazzino.aggiungiProdotto(prodotto8);
magazzino.aggiungiProdotto(prodotto9);
magazzino.aggiungiProdotto(prodotto10);
magazzino.aggiungiProdotto(prodotto11);
magazzino.aggiungiProdotto(prodotto12);
magazzino.aggiungiProdotto(prodotto13);
magazzino.aggiungiProdotto(prodotto14);
magazzino.aggiungiProdotto(prodotto15);

magazzino.ordinaProdotti();
console.log("Prodotti ordinati in base al prezzo:", magazzino);
magazzino.rimuoviProdotto("Camicia");
magazzino.rimuoviProdotto("Fiocco");
magazzino.rimuoviProdotto("Inglesine");
magazzino.rimuoviProdotto("Scarpe con tacco");
console.log("Prodotti dopo la rimozione:", magazzino);

const valoreTotale = magazzino.calcolaValoreTotale();
console.log("Il valore totale del magazzino è pari a:", valoreTotale);