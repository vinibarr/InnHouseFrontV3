
import './style.scss';
import { Box, Typography } from '@mui/material';


interface IPropertyCard {
    image: string;
    title: string;
    onClick?: () => void;
}


const PropertyCard: React.FC<IPropertyCard> = ({
    image,
    title,
    onClick = () => {}
}) => {
    return (
        <Box className='propertycard-default' sx={{ backgroundImage: `url(${image})` }} onClick={onClick}>
            <Typography variant='body1' className='propertycard-title'>
                {title}
            </Typography>
        </Box>
    );
}

export default PropertyCard;