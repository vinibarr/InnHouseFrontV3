
import './style.scss';
import { Backdrop, CircularProgress } from '@mui/material';


interface ILoadingProps {
    open: boolean;
    className?: string;
}


const Loading: React.FC<ILoadingProps> = ({
    open,
    className = ''
}) => {
    return (
        <Backdrop open={open} className={`backdrop-loading ${className}`}>
            <CircularProgress className='circular-progress' />
        </Backdrop>
    );
}

export default Loading;