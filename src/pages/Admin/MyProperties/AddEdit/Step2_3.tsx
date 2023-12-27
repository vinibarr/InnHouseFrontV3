import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps } from "../../../../interfaces/IProperty";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import DefaultConstants from "../../../../data/Constants";
import { useCallback, useRef, useState } from "react";
import AttachmentCard from "../../../../components/AttachmentCard/AttachmentCard";
import useForceRender from "../../../../hooks/useForceRender";
import { Add } from "@mui/icons-material";

const Step2_3: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    className
}) => {
    const { translate } = useLanguageContext();
    const forceRender = useForceRender();

    const inputRef = useRef<HTMLInputElement>(null);

    const [photos, setPhotos] = useState<File[]>([]);


    const handleAddFile = useCallback((e: any) => {
        const aux = photos;
    
        Object.entries(e.target.files as File[]).forEach(([key, file]) => {
          aux.push(file);
        });
    
        setPhotos(aux);
        forceRender();
        // eslint-disable-next-line
    }, [photos]);
    
    
    const handleRemoveFile = useCallback((key: number) => {
        const aux = photos;
        aux.splice(key, 1);
    
        setPhotos(aux);
        forceRender();
        // eslint-disable-next-line
    }, [photos]);


    const renderFileInputs = useCallback(() => {
        let container = document.getElementById('photo-inputs-container');
        if (container) {
            container.remove();
        }

        container = document.createElement('div');
        container.id = 'photo-inputs-container';
        container.className = 'display-none';
        document.getElementById('photos-container')?.appendChild(container);

        photos.forEach((p, index) => {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(p);

            const input = document.createElement('input');
            input.name = `fotos[${index}]`;
            input.type = 'file';
            input.className = 'display-none';
            input.files = dataTransfer.files;

            container?.appendChild(input);
        });
        
        return <> </>;
        // eslint-disable-next-line
    }, [photos]);


    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('addPhotosOfYourProperty')}
            </Typography>
        </Grid>

        <Grid item xs={12} id='photos-container'>
            <input
                ref={inputRef}
                type="file"
                value=''
                multiple={true}
                onChange={handleAddFile}
                accept="image/*"
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
                    photos.map((p, index) => {
                        const url = URL.createObjectURL(p);

                        return <Grid item>
                            <AttachmentCard
                                url={url}
                                name={p.name}
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

export default Step2_3;