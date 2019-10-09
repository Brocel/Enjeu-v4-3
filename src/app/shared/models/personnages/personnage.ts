import { Description } from './description';
import { Statistics } from './statistics';

export class Personnage {
  role: 'JOUEUR'|'MOB';
  description: Description;
  statistics: Statistics;

  //getters
  get getRole() {
      return this.role;
  }

  constructor(
    role: 'JOUEUR'|'MOB',
    //description
    name: string,
    gender: 'FEMME'|'HOMME'|'HERMAPHRODITE',
    mood: string,
    avatar: string,
    story: string,
    race: 'HUMAIN'|'ELFE'|'NAIN'|'ORC'|'GOBELIN',
    job: 'GUERRIER'|'SAGE'|'ASSASSIN',
    specialty:'COMBAT'|'ARC'|'SPITITUALITE'|'ALCHIMIE'|'VOL'|'POISON'
    )
  {
    this.role = role || 'JOUEUR';
    this.description = new Description(name, gender, mood, avatar, story, race, job, specialty);
    this.statistics = new Statistics(race, job, specialty);
    //mettre un return description et statistics ?
  }
  // Méthodes
  describeSelf() {
    let role = this.getRole;
    let name = this.description.getName;
    let gender = this.description.getGender;
    let mood = this.description.getMood;
    let story = this.description.getStory;
    let race = this.description.race.getRaceName;
    let job = this.description.job.getJobName;
    let specialty = this.description.specialty.getSpecName;
    let ability = this.description.specialty.getAbility;

    return console.log('Je suis un '+role+' '+gender+' '+race+' assez '+mood+' répondant au nom de '+name+'. Je suis un '+job+' spécialisé dans : '+specialty+'. Compétence particulière : '+ability+'. Voici mon histoire : '+story);
  }

  showPhysicalStats() {
    let taille = this.statistics.getTaille;
    let mass = this.statistics.getMass;
    let age = this.statistics.getAge;

    return console.log('Je mesure : '+taille+' mètres (m), ma masse vaut : '+mass+' kilogrammes (kg) et je suis âgé de : '+age+' années (1 an = 365.25 jours).');
  }

  showInGameStats() {
    let force = this.statistics.getFor;
    let defense = this.statistics.getDef;
    let intel = this.statistics.getInt;

    return console.log('Je possède une force physique de : '+force+' UF (Unité de Force) , une résistance physique de : '+defense+' UD (Unité de Défense) et une intelligence de : '+intel+' UFM (Unité de Force Mentale).');
  }
}
