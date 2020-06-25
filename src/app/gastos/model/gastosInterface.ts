export interface GastosInterface {
    proyecto : {
        idProyecto :number,    
        dsProyecto : string
    },
    rangoFechas : Date[],
    tipoGasto : {
        idTipoGasto : number,
        dsTipoGasto : string
    },
    nmUnidades : number,
    nmImporte : number,
    nmTotal : number,
    dsDescripcion : string,
    estado : {
        idEstado : number,
        dsEstado : string
    }
}