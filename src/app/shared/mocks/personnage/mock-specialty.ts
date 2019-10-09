import { Specialty } from 'src/app/shared/models/personnages/specialty';

export const SPECIALTIES: Specialty[] = [
  { specName: 'COMBAT', specModFor: 1.5, specModDef: 1.5, specModInt: 1, ability: 'Mandale héroïque'},
  { specName: 'ARC', specModFor: 1.6, specModDef: 1, specModInt: 1.4, ability: 'Tir précis'},
  { specName: 'SPITITUALITE', specModFor: 1, specModDef: 1.2, specModInt: 1.8, ability: 'Motiver les troupes'},
  { specName: 'ALCHIMIE', specModFor: 1, specModDef: 1.4, specModInt: 1.6, ability: 'Potion antidouleur'},
  { specName: 'VOL', specModFor: 1.2, specModDef: 1.2, specModInt: 1.6, ability: 'Subtiliser'},
  { specName: 'POISON', specModFor: 1, specModDef: 1.6, specModInt: 1.4, ability: 'Confection de poison'}
];
