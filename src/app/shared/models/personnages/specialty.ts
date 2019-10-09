export class Specialty {
  specName: 'COMBAT'|'ARC'|'SPITITUALITE'|'ALCHIMIE'|'VOL'|'POISON';
  readonly specModFor: number; //specModif de force
  readonly specModDef: number; //specModif de défense
  readonly specModInt: number; //specModif de intelligence
  readonly ability : string; //compétence particulière

  // getters
  get getSpecName() {
    return this.specName;
  }
  get getSpecModFor() {
    return this.specModFor;
  }
  get getSpecModDef() {
    return this.specModDef;
  }
  get getSpecModInt() {
    return this.specModInt;
  }
  get getAbility() {
    return this.ability;
  }

  constructor(
    specialty: 'COMBAT'|'ARC'|'SPITITUALITE'|'ALCHIMIE'|'VOL'|'POISON'
  )
  {
    this.specName = name || 'COMBAT';
    // if (this.specName=='COMBAT') {//cf mocks
    //   this.specModFor = 1.5;
    //   this.specModDef = 1.5;
    //   this.specModInt = 1;
    //   this.ability = 'Je me bats très bien au corps à corps';
    // } else if (this.specName=='ARC') {
    //   this.specModFor = 1.6;
    //   this.specModDef = 1;
    //   this.specModInt = 1.4;
    //   this.ability = 'Je suis plus efficace à distance';
    // } else if (this.specName=='SPITITUALITE') {
    //   this.specModFor = 1;
    //   this.specModDef = 1.2;
    //   this.specModInt = 1.8;
    //   this.ability = 'Je motive les troupes';
    // } else if (this.specName=='ALCHIMIE') {
    //   this.specModFor = 1;
    //   this.specModDef = 1.4;
    //   this.specModInt = 1.6;
    //   this.ability = 'Je fabrique des potions alchimiques';
    // } else if (this.specName=='VOL') {
    //   this.specModFor = 1.2;
    //   this.specModDef = 1.2;
    //   this.specModInt = 1.6;
    //   this.ability = 'Je suis très discret';
    // } else if (this.specName=='POISON') {
    //   this.specModFor = 1;
    //   this.specModDef = 1.6;
    //   this.specModInt = 1.4;
    //   this.ability = 'Je confectionne des poisons';
    // }
  }
}
