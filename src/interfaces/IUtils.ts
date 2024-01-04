

export interface IZipCode {
	erro?: string;
	bairro?: string;
	cep?: string;
	complemento?: string;
	ddd?: string;
	gia?: string;
	ibge?: string;
	localidade?: string;
	logradouro?: string;
	siafi?: string;
	uf?: string;
}


export interface ICoordinates {
	lat: number;
	lng: number;
}