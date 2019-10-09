import { Race } from './race';
import { Job } from './job';
import { Specialty } from './specialty';

export class Statistics {
  readonly taille: number; // taille de l'individu en metres
  readonly mass: number; // masse en kg
  readonly age: number; // age en années
  readonly force: number; //force physique
  readonly defense: number; // résistance physique
  readonly intel: number; // intelligence
  race: Race;
  job: Job;
  specialty: Specialty;
  private defaultFor: number = 10;
  private defaultDef: number = 10;
  private defaultInt: number = 10;

  //getters
  get getTaille() {
    return this.taille;
  }
  get getMass() {
    return this.mass;
  }
  get getAge() {
    return this.age;
  }
  get getFor() {
    return this.force;
  }
  get getDef() {
    return this.defense;
  }
  get getInt() {
    return this.intel;
  }

  constructor(
    race: 'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN',
    job: 'GUERRIER'|'SAGE'|'ASSASSIN',
    specialty: 'COMBAT'|'ARC'|'SPITITUALITE'|'ALCHIMIE'|'VOL'|'POISON'
  )
  {
    this.race = new Race(race);
    this.job = new Job(job);
    this.specialty = new Specialty(specialty);
    //Taille (fction de Race)
    this.taille = Math.random() * (this.race.getMaxTaille - this.race.getMinTaille) + this.race.getMinTaille;
    //mass en fction de Taille et du modif de mass de race
    this.mass = this.taille * this.race.getRaceModMass * 100 / 3;
    //age en fonction de Race
    this.age = Math.random() * (this.race.getMaxAge - this.race.getMinAge) + this.race.getMinAge;
    // Force, def, int en fction de race, job et specialty
    this.force = this.defaultFor * this.race.getRaceModFor * this.job.getJobModFor * this.specialty.getSpecModFor;
    this.defense = this.defaultDef * this.race.getRaceModDef * this.job.getJobModDef * this.specialty.getSpecModDef;
    this.intel = this.defaultInt * this.job.getJobModInt * this.specialty.getSpecModInt;
  }

  //méthodes

}
