export class City {
  public firstInvader: number;
  public nbInvader: number;
  public nbLivingInvader: number;
  public nbWaves: number;
  public scoreInvader: number;
  public scoreLivingInvader: number;
  public yearFirstInvasion: number;
  public flag: string;
  constructor( public code: string, public name: string, public country: string, public continent: string) { }
}
