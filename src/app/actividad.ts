export class ParteActividad {

    // constructor class expression
    constructor() { }

    public empleado: string;
    public mes: number;
    public anio: number;

    public actividades: Actividad[] = [];

    public estado?: string;

}

export class Actividad {

    // constructor class expression
    constructor() { }

    public proyecto: string;
    public concepto: string;
    public horas: number[] = [];
                
}
