
import './toolsbar.scss'
import { Avatar, Grid, IconButton } from '@mui/material';
import { useLanguageContext } from '../../contexts/LanguageContext';
import Languages from '../../data/Languages';
import { history } from '../../router/History';
import { ArrowBack } from '@mui/icons-material';


interface IToolsBarProps {
    backTo?: string;
}

const ToolsBar: React.FunctionComponent<IToolsBarProps> = ({
    backTo = undefined
}) => {
    const { language, handleChangeLanguage } = useLanguageContext();
    
    return (
        <Grid container className='container-toolsbar'>
            <Grid item className='grid-actions'>
                {
                    backTo && <IconButton size='medium' onClick={() => history.push(backTo)}>
                        <ArrowBack fontSize='inherit' />
                    </IconButton>
                }
            </Grid>

            <Grid item className='grid-languages'>
                {
                    Languages.map(l => {
                        return <Avatar
                            src={l.icon}
                            alt={l.initials}
                            key={l.key}
                            className={`avatar-language ${l.key === language.key ? 'active' : ''}`}
                            onClick={() => handleChangeLanguage(l.key)}
                        />;
                    })
                }
            </Grid>
        </Grid>
    );
}


export default ToolsBar;