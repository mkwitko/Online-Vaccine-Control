import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaccineListService {

  public vaccineList = [
    {
      name: 'BCG ID',
      description: '',
      quantity: 1,
      dosage: {
        first: 0
      }
    },

    {
      name: 'Hepatite B',
      description: '',
      quantity: 3,
      dosage: {
        first: 0,
        second: 2,
        third: 6
      }
    },

    {
      name: 'Tríplice bacteriana',
      description: '',
      quantity: 3,
      dosage: {
        first: 2,
        second: 4,
        third: 6
      },
      reinforcmentDosage: {
        quantity: 2,
        when: {
          first: 15,
          firstEnd: 18,
          second: 4*12,
          secondEnd: 5*12
        }
      },
      reinforcmentSpecialPeriod: [1,2]
    },

    {
      name: 'Hib',
      fullName: 'Haemophilus  influenzae b',
      description: '',
      quantity: 3,
      dosage: {
        first: 2,
        second: 4,
        third: 6
      },
      reinforcmentDosage: {
        quantity: 2,
        when: {
          first: 15,
          firstEnd: 18
        }
      },
      reinforcmentSpecialPeriod: [1]
    },

    {
      name: 'Poliomielite',
      description: '',
      quantity: 3,
      dosage: {
        first: 2,
        second: 4,
        third: 6
      },
      reinforcmentDosage: {
        quantity: 2,
        when: {
          first: 15,
          firstEnd: 18,
          second: 4*12,
          secondEnd: 5*12
        }
      },
      reinforcmentSpecialPeriod: [1,2]
    },

    {
      name: 'Rotavirus Monovalente',
      description: '',
      quantity: 2,
      dosage: {
        first: 2,
        second: 4
      }
    },

    {
      name: 'Rotavirus Pentavalente',
      description: '',
      quantity: 3,
      dosage: {
        first: 2,
        second: 4,
        third: 6
      }
    },

    {
      name: 'Pneumocócicas conjugadas - VPC10',
      description: '',
      quantity: 2,
      dosage: {
        first: 2,
        second: 4
      },
      reinforcmentDosage: {
        quantity: 1,
        when: {
          first: 12,
          firstEnd: 15
        }
      },
      reinforcmentSpecialPeriod: [1]
    },

    {
      name: 'Pneumocócicas conjugadas - VPC13',
      description: '',
      quantity: 3,
      dosage: {
        first: 2,
        second: 4,
        thirt: 6
      },
      reinforcmentDosage: {
        quantity: 1,
        when: {
          first: 12,
          firstEnd: 15
        }
      },
      reinforcmentSpecialPeriod: [1]
    },

    {
      name: 'menC e menACWY-TT ',
      fullName: 'Meningocócicas conjugadas ACWY/C',
      description: '',
      quantity: 2,
      dosage: {
        first: 3,
        second: 5
      },
      reinforcmentDosage: {
        quantity: 1,
        when: {
          first: 12,
          firstEnd: 15
        }
      },
      reinforcmentSpecialPeriod: [1]
    },

    {
      name: 'menACWY-CRM',
      fullName: 'Meningocócicas conjugadas ACWY/C',
      description: '',
      quantity: 3,
      dosage: {
        first: 3,
        second: 5,
        third: 7
      },
      reinforcmentDosage: {
        quantity: 1,
        when: {
          first: 12,
          firstEnd: 15
        }
      },
      reinforcmentSpecialPeriod: [1]
    },

    {
      name: 'menACWY-D',
      fullName: 'Meningocócicas conjugadas ACWY/C',
      description: '',
      quantity: 2,
      dosage: {
        first: 9,
        firstEnd: 23,
        second: 9,
        secondEnd: 23
      },
      dosageSpecialPeriod: [1,2]
    },

    {
      name: 'Meningocócica B',
      description: '',
      quantity: 2,
      dosage: {
        first: 3,
        second: 5
      },
      reinforcmentDosage: {
        quantity: 1,
        when: {
          first: 12,
          firstEnd: 15
        }
      },
      reinforcmentSpecialPeriod: [1]
    },

    {
      name: 'Influenza (gripe)',
      description: '',
      quantity: 2,
      dosage: {
        before: 9 * 12,
        interval: 1
      },
      reinforcmentDosage: {
        yearly: true
      }
    },

    {
      name: 'Poliomielite oral',
      description: '',
      dosage: {
        specialDays: true
      },
      reinforcmentDosage: {
        yearly: true
      },
      specialSchedule: true
    },

    {
      name: 'Febre Amarela',
      description: '',
      quantity: 1,
      anual: false,
      specialSchedule: true
    },

    {
      name: 'Hepatite A',
      description: '',
      quantity: 2,
      dosage: {
        first: 12,
        second: 18
      }
    },

    {
      name: 'Sarampo, Caxumba e Rubeola',
      fullName: 'Tríplice viral',
      description: '',
      quantity: 3,
      dosage: {
        first: 12,
        second: 15,
        secondEnd: 24,
        third: 15,
        thirdEnd: 24
      },
      dosageSpecialPeriod: [2,3]
    },

    {
      name: 'Catapora',
      fullName: 'Varicela ',
      description: '',
      quantity: 3,
      dosage: {
        first: 12,
        second: 15,
        secondEnd: 24,
        third: 15,
        thirdEnd: 24
      },
      dosageSpecialPeriod: [2,3]
    },

    {
      name: 'HPV',
      description: '',
      quantity: 2,
      dosage: {
        first: 9*12,
        firstEnd: 10*12,
        second: 9*12,
        secondEnd: 10*12
      },
      dosageSpecialPeriod: [1,2]
    },

    {
      name: 'dTpa',
      fullName: 'Vacina tríplice bacteriana acelular do tipo adulto',
      description: '',
      quantity: 1,
      dosage: {
        first: 9*12,
        firstEnd: 10*12
      },
      dosageSpecialPeriod: [1]
    },

    {
      name: 'Dengue',
      description: '',
      quantity: 3,
      dosage: {
        first: 9*12,
        firstEnd: 10*12,

        second: 9*12,
        secondEnd: 10*12,

        third: 9*12,
        thirdEnd: 10*12,
      },
      dosageSpecialPeriod: [1,2,3]
    },



  ];

  public periods = [
    {
      name: 'Ao nascer',
      icon: '',
      special: false,
      anualDate: false,
      period: 0,
      vaccines: []
    },
    {
      name: 'Dois Meses',
      icon: '',
      special: false,
      anualDate: false,
      period: 2
    },
    {
      name: 'Três Meses',
      icon: '',
      special: false,
      anualDate: false,
      period: 3
    },
    {
      name: 'Quatro Meses',
      icon: '',
      special: false,
      anualDate: false,
      period: 4
    },
    {
      name: 'Cinco Meses',
      icon: '',
      special: false,
      anualDate: false,
      period: 5
    },
    {
      name: 'Seis Meses',
      icon: '',
      special: false,
      anualDate: false,
      period: 6
    },
    {
      name: 'Sete Meses',
      icon: '',
      special: false,
      anualDate: false,
      period: 7
    },
    {
      name: 'Doze meses',
      icon: '',
      special: false,
      anualDate: false,
      period: 12
    },
    {
      name: 'Dezoito meses',
      icon: '',
      special: false,
      anualDate: false,
      period: 18
    },
    {
      name: 'De Nove à Vinte e Três Meses',
      icon: '',
      special: true,
      anualDate: false,
      period: 9,
      period2: 23
    },
    {
      name: 'De Doze à Quinze Meses',
      icon: '',
      special: true,
      anualDate: false,
      period: 12,
      period2: 15
    },
    {
      name: 'Entre Quinze e Dezoito meses',
      icon: '',
      special: true,
      anualDate: false,
      period: 15,
      period2: 18
    },
    {
      name: 'De Quinze à Vinte e Quatro Meses',
      icon: '',
      special: true,
      anualDate: false,
      period: 15,
      period2: 24
    },
    {
      name: 'Entre Quatro e Cinco Anos',
      icon: '',
      special: true,
      anualDate: false,
      period: 4 * 12,
      period2: 5 * 12
    },
    {
      name: 'Entre Nove e Dez Anos',
      icon: '',
      special: true,
      anualDate: false,
      period: 9 * 12,
      period2: 10 * 12
    },
    {
      name: 'Dias Nacionais de Vacinação',
      icon: '',
      special: false,
      anualDate: false,
      specialSchedule: true
    },
    {
      name: 'Anual',
      icon: '',
      special: false,
      anualDate: true,
      specialSchedule: false
    },
  ];

  constructor() { }
}
