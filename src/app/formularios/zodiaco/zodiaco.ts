export class Zodiaco{
  dias:number = 0;
  mes:number = 0;
  anno:number = 0;
  nombre:string = "";
  aPaterno:string = "";
  aMaterno:string = "";
  sexo:string = "";

  annoDeSigno:number = 0;
  signoNom:string = "";
  signoImg:string = "";
  nombreFull:string = "";
  edad:number = 0;
  hoy:Date = new Date();
  fechaNac:Date = new Date();

  CalcularSigno():void{
    this.annoDeSigno = this.anno % 12;
    this.nombreFull = this.nombre + " " + this.aPaterno + " " + this.aMaterno;
    for(let zod of this.zodiacos){
      if(zod.numero == this.annoDeSigno){
        this.signoNom = zod.nombre;
        this.signoImg = zod.imagen;
      }
    }
    this.CalcularEdad();
  }

  CalcularEdad():void{
    this.edad = this.hoy.getFullYear() - this.fechaNac.getFullYear();
    console.log(this.hoy.getMonth(), this.fechaNac.getMonth())
    console.log(this.hoy.getDate(), this.fechaNac.getDate())
    if(this.hoy.getMonth() <= this.fechaNac.getMonth() && this.hoy.getDate() < this.fechaNac.getDate()){
      this.edad = this.edad - 1;
    }

  }

  zodiacos = [
    {
    numero: 0,
    nombre: "mono",
    imagen: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg"
  },
    {
    numero: 1,
    nombre: "gallo",
    imagen: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Gallo.jpg"
  },
    {
    numero: 2,
    nombre: "perro",
    imagen: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Perro.jpg"
  },
    {
    numero: 3,
    nombre: "cerdo",
    imagen: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cerdo.jpg"
  },
    {
    numero: 4,
    nombre: "rata",
    imagen: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg"
  },
    {
    numero: 5,
    nombre: "buey",
    imagen: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg"
  },
    {
    numero: 6,
    nombre: "tigre",
    imagen: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg"
  },
    {
    numero: 7,
    nombre: "conejo",
    imagen: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg"
  },
    {
    numero: 8,
    nombre: "dragon",
    imagen: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Dragon.jpg"
  },
    {
    numero: 9,
    nombre: "serpiente",
    imagen: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg"
  },
    {
    numero: 10,
    nombre: "caballo",
    imagen: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg"
  },
    {
    numero: 11,
    nombre: "cabra",
    imagen: "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cabra.jpg"
  },
  ]
}

