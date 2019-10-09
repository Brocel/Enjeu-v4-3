export class Job {
  jobName: 'GUERRIER'|'SAGE'|'ASSASSIN';
  readonly jobModFor: number; //jobModif de force
  readonly jobModDef: number; //jobModif de défense
  readonly jobModInt: number; //jobModif de intelligence

  // getters
  get getJobName() {
    return this.jobName;
  }
  get getJobModFor() {
    return this.jobModFor;
  }
  get getJobModDef() {
    return this.jobModDef;
  }
  get getJobModInt() {
    return this.jobModInt;
  }

  constructor(
    job: 'GUERRIER'|'SAGE'|'ASSASSIN'
  )
  {
    this.jobName = name || 'GUERRIER';
    // if (this.jobName=='GUERRIER') {//idem que race.ts (cf mocks)
    //   this.jobModFor = 1.2;
    //   this.jobModDef = 1.2;
    //   this.jobModInt = 0.6;
    // } else if (this.jobName=='SAGE') {
    //   this.jobModFor = 0.8;
    //   this.jobModDef = 0.8;
    //   this.jobModInt = 1.4;
    // } else if (this.jobName=='ASSASSIN') {
    //   this.jobModFor = 1.2;
    //   this.jobModDef = 0.6;
    //   this.jobModInt = 1.2;
    // }
  }

}
