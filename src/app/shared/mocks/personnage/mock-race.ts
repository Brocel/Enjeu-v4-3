import { Race } from 'src/app/shared/models/personnages/race';

export const RACES: Race[] = [
  { raceName: 'HUMAIN', minTaille: 1.4, maxTaille: 2.1, minAge: 15, maxAge: 100, raceModFor: 1, raceModDef: 1, raceModMass: 1},
  { raceName: 'ELFE', minTaille: 1.3, maxTaille: 1.8, minAge: 40, maxAge: 800, raceModFor: 0.8, raceModDef: 0.8, raceModMass: 0.8},
  { raceName: 'NAIN', minTaille: 1.1, maxTaille: 1.5, minAge: 50, maxAge: 500, raceModFor: 1.3, raceModDef: 1.1, raceModMass: 1.5},
  { raceName: 'ORC', minTaille: 1.7, maxTaille: 2.5, minAge: 12, maxAge: 60, raceModFor: 1.3, raceModDef: 1.1, raceModMass: 1.2},
  { raceName: 'GOBELIN', minTaille: 0.7, maxTaille: 1.3, minAge: 10, maxAge: 90, raceModFor: 0.7, raceModDef: 1.3, raceModMass: 1.2}
];
