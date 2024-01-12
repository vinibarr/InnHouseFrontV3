

export interface IProperty {
	id: number;
	descricao: string;
	observacoes: string;
	id_statusregistro: number;
	id_statusgovernanca: number;
	pais: string;
	uf: string;
	cidade: string;
	logradouro: string;
	numero: string;
	complemento: string;
	cep: string;
	bairro: string;
	banheiros: number;
	quartos: number;
	pessoas: number;
	latitude: string;
	longitude: string;
	governanca: string;
	status: string;
	tipo: string;
	caracteristicas: IPropertyFeature[];
	comodidades: IPropertyAmenity[];
	fotos: IPropertyPhoto[];
}


export interface IPropertyType {
	id: number;
	descr: string;
	caminho_imagem: string;
	caminho_imagem_over: string;
}


export interface IPropertyAmenity {
	id: number;
	descr: string;
	caminho_imagem: string;
	caminho_imagem_over: string;
}


export interface IPropertyFeature {
	id: number;
	descr: string;
	caminho_imagem: string;
	caminho_imagem_over: string;
}


export interface IPropertyAddEditStepProps {
	formData: FormData;
	active: boolean;
	googleMapsApiLoaded: boolean;
	className: string;
}


export interface IPropertyPhoto {
	id: number;
	nome_original: string;
	nome_servidor: string;
	tipo: string;
	extensao: string;
}