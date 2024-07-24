import { Filijala } from "./filijala";
import { KorisnikUsluge } from "./korisnik-usluge";

export class Usluga {
    id!: number;
    naziv!: string;
    opisUslsuge!: string;
    datumUgovora!: Date;
    provizija!: number;
    filijala!: Filijala;
    korisnikUsluge!: KorisnikUsluge;
}