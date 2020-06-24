import { Vacaciones } from './vacaciones';

export class Empleado {

// constructor class expression
constructor() { }
 
    public codigo: string;
    public nombre: string;
	public gerente: string;
    public vacaciones: Vacaciones[];

    public diasTotales: number;
    public diasPendientes: number;
    public dias2019: number;
    public diasTramite: number;
    public diasDisfrutados: number;
    public dias2020: number;

}
