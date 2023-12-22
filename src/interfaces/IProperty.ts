

export interface IPropertyType {
	id: number;
	descr_pt: string;
	descr_es: string;
	descr_en: string;
	caminho_imagem: string;
	caminho_imagem_over: string;
}


export interface IPropertyAddEditStepProps {
	active: boolean;
	className: string;
}