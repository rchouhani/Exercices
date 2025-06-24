enum Categories {
  Documentaires = "Documentaires",
  Fiction = "fiction",
  Historique = "Historique",
}

class Director {
  private fullname: string;
  private birthdate: Date;

  public constructor(fullname: string, birthdate: Date){
    this.fullname = fullname;
    this.birthdate = birthdate;
    // console.log(this)
  }
  public getAge(): Number {
    const d = new Date();
    let anneeCurrent = d.getFullYear();
    let birthYear = this.birthdate.getFullYear();
    return anneeCurrent - birthYear
  }

  public getFullname(): string {
    return this.fullname
  }
}
const justineTriet: Director = new Director("Justine Triet", new Date(1978, 6, 17))
const ellenKuras = new Director("Ellen Kuras", new Date(1959, 6, 10))
const agnesVarda = new Director("Agnès Varda", new Date(1928, 4, 30))
const zabouBreitman = new Director("Isabelle \"Zabou\" Breitman", new Date(1959, 9, 30))
const charlotteBrandstrom = new Director("Charlotte Brändström", new Date(1959, 4, 30))


const justineTrietAge = justineTriet.getAge();
const ellenKurasAge = ellenKuras.getAge();
const vardaAge = agnesVarda.getAge();
const breitmanAge = zabouBreitman.getAge();
const brandstromAge = charlotteBrandstrom.getAge();


class Film { 
  private title: string;
  private date: number;
  private director: Director;
  private categorie: Categories;

  public constructor( title: string, date: number, director: Director, categorie: Categories ){
    this.title = title;
    this.date = date;
    this.director = director;
    this.categorie = categorie;
  } 
  getFullMovie(): string {
    return `"${this.title}" a été projeté en ${this.date} et réalisé par ${this.director.getFullname()} agé de ${this.director.getAge()} ans. ${this.title} est listé dans la catégorie : ${this.categorie}`;
  }
} 

const anatomieChute = new Film  ("Anatomie d'une chute", 2023, justineTriet, Categories.Fiction)
const leeMiller = new Film ("Lee Miller", 2024, ellenKuras, Categories.Historique)
const kungFuMaster = new Film ("Kung-fu Master", 2024, agnesVarda, Categories.Fiction)
const badenBaden = new Film ("Baden Baden", 2024, zabouBreitman, Categories.Documentaires)
const eteOrage = new Film ("Un été d'orages", 2024, charlotteBrandstrom, Categories.Historique)


class Client {
    private fullname: String
    private rentedMovies: Rental[]

    public constructor(fullname: string) {
        this.fullname = fullname
        this.rentedMovies = []
    }

    rent(movie: Film): void {
        this.rentedMovies.push(new Rental(movie))
        console.log('🎲🎲', this.rentedMovies)
    }
    getClients(): string {
      return `${this.fullname} a emprunté ${this.rentedMovies}`
    }
    
}

const eva = new Client("Eva")

class Rental {
    private movie: Film;
    private rentalDate: Date;

    public constructor(movie: Film) {
        this.movie = movie
        this.rentalDate = new Date()
    }
    getRental(): String {
      return `${this.movie} a été loué le ${this.rentalDate}`
    }
}

function borrowMovie() {
    const Laila: Client = new Client("Laila")
    Laila.rent(anatomieChute)
}
borrowMovie()

// console.log(eva.getClients())
console.log(badenBaden.getFullMovie())
console.log(eteOrage.getFullMovie())