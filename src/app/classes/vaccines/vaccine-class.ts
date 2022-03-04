import { Injectable } from '@angular/core';
import { VaccineListService } from 'src/app/services/vaccine/vaccine-list.service';
import { DependencyClass } from '../menu/profile/profile-creator/dependency';
import { ResponsibleClass } from '../menu/profile/profile-creator/responsible';

@Injectable()
export class VaccineClass{

  constructor(
    public dependencyClass: DependencyClass,
    public responsibleClass: ResponsibleClass,
    public vaccineList: VaccineListService
  ){}


  callAll(){
    this.dependencyClass.getData();
    this.responsibleClass.getData();
  }

  resetLoop(){
    for(const a of this.vaccineList.periods){
      a.vaccines = [];
    }
  }

  forLoop(){
    this.resetLoop();
    for(const a of this.vaccineList.vaccineList){

      if('dosage' in a){

        if('first' in a.dosage){
          const index = 1;
          const path = a.dosage.first;
          for(const b of this.vaccineList.periods){
            if(b.special === false ){
              if('dosageSpecialPeriod' in a === false){
                if(b.period === path){
                  b.vaccines.push({
                    nome: a.name,
                    dose: index,
                    dosesTotais: a.quantity,
                    periodo: b.period
                  });
                }
              } else {
                if(!a.dosageSpecialPeriod.includes(index)){
                  if(b.period === path){
                    b.vaccines.push({
                      nome: a.name,
                      dose: index,
                      dosesTotais: a.quantity,
                      periodo: b.period
                    });
                  }
                }
              }
            } else if(b.special === true){
              if('dosageSpecialPeriod' in a){
                if(a.dosageSpecialPeriod.includes(index)){
                  if(b.period === path){
                    b.vaccines.push({
                      nome: a.name,
                      dose: index,
                      dosesTotais: a.quantity,
                      periodo: b.period
                    });
                  }
                }
              }
            }
          }
        }

        if('second' in a.dosage){
          const index = 2;
          const path = a.dosage.second;
          for(const b of this.vaccineList.periods){
            if(b.special === false ){
              if('dosageSpecialPeriod' in a === false){
                if(b.period === path){
                  b.vaccines.push({
                    nome: a.name,
                    dose: index,
                    dosesTotais: a.quantity,
                    periodo: b.period
                  });
                }
              } else {
                if(!a.dosageSpecialPeriod.includes(index)){
                  if(b.period === path){
                    b.vaccines.push({
                      nome: a.name,
                      dose: index,
                      dosesTotais: a.quantity,
                      periodo: b.period
                    });
                  }
                }
              }
            } else if(b.special === true){
              if('dosageSpecialPeriod' in a){
                if(a.dosageSpecialPeriod.includes(index)){
                  if(b.period === path){
                    b.vaccines.push({
                      nome: a.name,
                      dose: index,
                      dosesTotais: a.quantity,
                      periodo: b.period
                    });
                  }
                }
              }
            }
          }
        }

        if('third' in a.dosage){
          const index = 3;
          const path = a.dosage.third;
          for(const b of this.vaccineList.periods){
            if(b.special === false ){
              if('dosageSpecialPeriod' in a === false){
                if(b.period === path){
                  b.vaccines.push({
                    nome: a.name,
                    dose: index,
                    dosesTotais: a.quantity,
                    periodo: b.period
                  });
                }
              } else {
                if(!a.dosageSpecialPeriod.includes(index)){
                  if(b.period === path){
                    b.vaccines.push({
                      nome: a.name,
                      dose: index,
                      dosesTotais: a.quantity,
                      periodo: b.period
                    });
                  }
                }
              }
            } else if(b.special === true){
              if('dosageSpecialPeriod' in a){
                if(a.dosageSpecialPeriod.includes(index)){
                  if(b.period === path){
                    b.vaccines.push({
                      nome: a.name,
                      dose: index,
                      dosesTotais: a.quantity,
                      periodo: b.period
                    });
                  }
                }
              }
            }
          }
        }
      }

      if ('anual' in a){
        if(a.anual === true){
          for(const b of this.vaccineList.periods){
            if(b.anualDate === true){
              b.vaccines.push({
                nome: a.name,
                dose: 'Anual'
              });
            }
          }
        }
      }

      if ('specialSchedule' in a){
        if(a.specialSchedule === true){
          for(const b of this.vaccineList.periods){
            if(b.specialSchedule === true){
              b.vaccines.push({
                nome: a.name,
                dose: 'Anual'
              });
            }
          }
        }
      }

      if('reinforcmentDosage' in a){
        if('when' in a.reinforcmentDosage){
          if('first' in a.reinforcmentDosage.when){
            const index = 1;
            const path =  a.reinforcmentDosage.when.first;
            for(const b of this.vaccineList.periods){
              if(b.special === false){
                // Ainda não tem vacinas de reforço fora de periodos especiais
              } else {
                if('reinforcmentSpecialPeriod' in a){
                  if(a.reinforcmentSpecialPeriod.includes(index)){
                    if(b.period === path){
                      b.vaccines.push({
                        nome: a.name,
                        dose: index,
                        dosesTotais: a.reinforcmentDosage.quantity,
                        periodo: b.period,
                        reinforcment: true
                      });
                    }
                  }
                }
              }
            }
          }
          if('second' in a.reinforcmentDosage.when)
          {
            //console.log('Second - ', a);
          }
          if('third' in a.reinforcmentDosage.when)
          {
            //console.log('Third - ', a);
          }
        } else if('yearly' in a.reinforcmentDosage) {
          //console.log('Yearly - ', a);
        }
      }
    }
  }
}
