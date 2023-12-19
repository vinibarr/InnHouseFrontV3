import { AccessProfileEnum } from "../data/Enums";

export default interface IUser {
	id_grupousuario: AccessProfileEnum;
    name: string;
    email: string;
    avatar: string;
}