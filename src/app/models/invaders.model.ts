import { City } from './cities.model';

export class Invader {
    photo: string;
    pts: string;
    status: string;
    arrondissement: string;
    lastReport: string;
    constructor(public code: string, public city: string) { }
}
