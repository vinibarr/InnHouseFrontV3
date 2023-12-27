import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps } from "../../../../interfaces/IProperty";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import DefaultConstants from "../../../../data/Constants";
import useForceRender from "../../../../hooks/useForceRender";
import { useCallback, useRef, useState } from "react";
import AttachmentCard from "../../../../components/AttachmentCard/AttachmentCard";
import { Add } from "@mui/icons-material";

const Step4_2: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    className
}) => {
    const { translate } = useLanguageContext();
    const forceRender = useForceRender();

    const inputRef = useRef<HTMLInputElement>(null);

    const [documents, setDocuments] = useState<File[]>([]);


    const handleAddFile = useCallback((e: any) => {
        const aux = documents;
    
        Object.entries(e.target.files as File[]).forEach(([key, file]) => {
          aux.push(file);
        });
    
        setDocuments(aux);
        forceRender();
        // eslint-disable-next-line
    }, [documents]);
    
    
    const handleRemoveFile = useCallback((key: number) => {
        const aux = documents;
        aux.splice(key, 1);
    
        setDocuments(aux);
        forceRender();
        // eslint-disable-next-line
    }, [documents]);


    const renderFileInputs = useCallback(() => {
        let container = document.getElementById('documents-inputs-container');
        if (container) {
            container.remove();
        }

        container = document.createElement('div');
        container.id = 'documents-inputs-container';
        container.className = 'display-none';
        document.getElementById('documents-container')?.appendChild(container);

        documents.forEach((d, index) => {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(d);

            const input = document.createElement('input');
            input.name = `documentos[${index}]`;
            input.type = 'file';
            input.className = 'display-none';
            input.files = dataTransfer.files;

            container?.appendChild(input);
        });
        
        return <> </>;
        // eslint-disable-next-line
    }, [documents]);


    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('sendYourPropertyDocuments')}
            </Typography>
        </Grid>

        <Grid item xs={12} id='documents-container'>
            <input
                ref={inputRef}
                type="file"
                value=''
                multiple={true}
                onChange={handleAddFile}
                accept="application/pdf"
                className='display-none'
            />

            {renderFileInputs()}

            <Grid container columnSpacing={DefaultConstants.gridColumnSpacing} rowSpacing={DefaultConstants.gridRowSpacing}>
                <Grid item onClick={() => inputRef.current && inputRef.current.click()}>
                    <AttachmentCard
                        url=''
                        name={'Adicionar'}
                        className="file-new-trigger scalein-animation"
                        Icon={Add}
                    />
                </Grid>

                {
                    documents.map((d, index) => {
                        const url = URL.createObjectURL(d);

                        return <Grid item>
                            <AttachmentCard
                                url={url}
                                name={d.name}
                                onRemove={() => handleRemoveFile(index)}
                                key={index}
                                className="scalein-animation"
                            />
                        </Grid>;
                    })
                }
            </Grid>
        </Grid>
    </Grid>;
}

export default Step4_2;