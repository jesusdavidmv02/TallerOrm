import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transacciones {

    @PrimaryGeneratedColumn()
    id: number | undefined ;
    @Column()
    user_id : number | undefined;
    @Column()
    cuenta_id : number | undefined;
    @Column()
    movimiento : number = 0 ;
    
    constructor(infoCliente : { id: number, user_id : number,  cuenta : number , saldo: number}){

    }

}