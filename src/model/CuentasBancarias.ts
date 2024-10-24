import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CuentaBacaria {

    @PrimaryGeneratedColumn()
    id: number | undefined ; 
    @Column()
    user_id : number | undefined;
    @Column()
    cuenta : number | undefined;
    @Column()
    saldo : number = 0 ;

     constructor(infoCliente : { id: number, user_id : number,  cuenta : number , saldo: number}){

    }

}