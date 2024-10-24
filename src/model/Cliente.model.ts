import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number | undefined ;

    @Column()
    nombre : string | undefined;

    @Column()
    email :string | undefined;

    @Column()
    telefono : number | undefined;

    tarjeta_id? : number | undefined ; 

     constructor(infoCliente : { id: number, nombre : string, email :string, telefono : number, tarjeta_id?  : number }){

        this.id = infoCliente.id;
        this.nombre = infoCliente.nombre;
        this.email = infoCliente.email;
        this.telefono = infoCliente.telefono;

    }

}