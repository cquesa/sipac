
export class Vacaciones {

    // constructor class expression
    constructor() { }
     
        public empleado: string;
        public anio: number;
        public vacaciones: VacacionesMes[] = [];
    
        public diasTotales: number;
        public diasPendientes: number;
        public dias2019: number;
        public diasTramite: number;
        public diasDisfrutados: number;
        public dias2020: number
    
}
    

export class VacacionesMes {

// constructor class expression
constructor(
    public mes: string,
    public dias: DiaVacaciones[] = [],
    public total: number
    ) { }
            
}

export class DiaVacaciones {

    // constructor class expression
    constructor(
        public check: boolean,
        public festivo?: boolean,
        public estado?: string
        ) { }
                
}
