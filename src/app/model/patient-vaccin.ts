import { Time } from "@angular/common";
import { Patient } from "./patient";
import { Vaccin } from "./vaccin";

export interface PatientVaccin {
    patient:Patient,
    vaccin:Vaccin,
    datePrevu:Date,
    dateVaccin:Date,
    effectuePar:string,
    heureVaccin:Time,
    etat:boolean
}
