
export default interface IUser {
	id: number;
    token: string;
	fullName: string;
	login: string;
	email: string;
	avatar: string;
	administrator: boolean;
	rowsPerPage: number;
	language: string;
	partnerId: string;
	forcePasswordChange: boolean | undefined;
}