export interface Unidades {
    id?:                number;
    codigo:             string;
    descripcion:        string;
    nivel:              string;
    folios:             number | string;
    contenedor?:        boolean;
    almacenamiento?:    boolean;
    asociated?:         boolean;
    edit?:              boolean;
}
