
import './style.scss';
import { Clear, Search as SearchIcon } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useLanguageContext } from '../../contexts/LanguageContext';
import TextField from '../TextField';
import { ChangeEvent } from 'react';


interface ISearchProps {
    open: boolean;
    handleClose: () => void;
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value: string;
}


const Search: React.FC<ISearchProps> = ({
    open, 
    handleClose,
    handleChange,
    value
}) => {
    const { translate } = useLanguageContext();

    return (
        <Box className={`search-default ${open ? 'actived' : ''}`}>
            <TextField
                label=''
                name='searchComponent'
                value={value}
                onChange={handleChange}
                placeholder={translate('search')}
                margin='none'
                variant='outlined'
                InputProps={{
                    startAdornment: <SearchIcon fontSize="small" sx={{marginRight: 2}} />,
                    endAdornment: (
                        <IconButton
                            size="small"
                            onClick={handleClose}
                        >
                            <Clear fontSize="small" />
                        </IconButton>
                    ),
                }}
            />
        </Box>
    );
}


export default Search;