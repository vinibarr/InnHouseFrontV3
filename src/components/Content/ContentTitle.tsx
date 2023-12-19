
import { Typography } from '@mui/material';
import { useLanguageContext } from '../../contexts/LanguageContext';


interface IContentTitleProps {
    name: string;
    description?: string; 
    applyTranslation?: boolean;
}


const ContentTitle: React.FC<IContentTitleProps> = ({ 
    name, 
    description, 
    applyTranslation = true
}) => {
    const { translate } = useLanguageContext();

    return (
        <>
            <Typography className='text-title'>
                {applyTranslation ? translate(name) : name}
            </Typography>

            {
                description && <Typography className='text-description'>
                    {applyTranslation ? translate(description) : description}
                </Typography>
            }
        </>
    );
}


export default ContentTitle;