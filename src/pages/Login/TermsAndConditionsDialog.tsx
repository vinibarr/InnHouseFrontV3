
import { Typography } from '@mui/material';
import { useLanguageContext } from '../../contexts/LanguageContext';
import Dialog, { IDefaultDialogProps } from '../../components/Dialog';


const TermsAndConditionsDialog: React.FunctionComponent<IDefaultDialogProps> = ({
    open,
    handleClose
}) => {
    const { translate } = useLanguageContext();

    return <Dialog
        open={open}
        handleClose={handleClose}
        title={translate('termsAndConditions')}
        fullWidth={true}
        maxWidth='md'
        fullHeight={true}
        className='dialogform-withoutactions'
    >
        <Typography variant='body1'>
            Lorem ipsum dolor sit amet. Non repellat consequatur ut officiis ipsa sed rerum fuga ut iure dolorum est eius voluptas ut illum labore in molestiae odit! Qui atque impedit et nulla obcaecati qui repudiandae autem id unde itaque rem porro reprehenderit sed molestias voluptate vel ullam ducimus?
        </Typography>

        <Typography variant='body1' marginTop={4}>
            Non necessitatibus quia sit nobis voluptate ea explicabo reiciendis 33 tenetur eaque hic quam ipsum sit perspiciatis cupiditate ut voluptatum doloribus? Quo nisi expedita ab nemo reiciendis non ducimus laudantium eum dolor fuga et natus debitis est eligendi tempore At fuga sunt. Sed magni odit est ullam molestiae aut dolores iusto ut corrupti dignissimos At adipisci officia non omnis consequatur et suscipit sapiente. Aut quibusdam libero ut perspiciatis consequuntur aut veritatis dolor sit labore velit.
        </Typography>

        <Typography variant='body1' marginTop={4}>
            Est fuga temporibus nam facere aperiam sit quia adipisci? Et sequi fugiat At aspernatur adipisci sit necessitatibus dolor aut sequi eligendi sit saepe deserunt. A totam quia nam deserunt voluptatem eos autem dolorem id dolorum praesentium sed maxime sunt quo dolorem omnis.
        </Typography>

        <Typography variant='body1' marginTop={4}>
            Et nobis incidunt et consequatur quibusdam ut voluptatem ipsa id modi quod. Et iusto tempore non suscipit voluptas ut eius dignissimos ut officia dolor ut recusandae deserunt non rerum quia est laudantium laborum.
        </Typography>

        <Typography variant='body1' marginTop={4}>
            Et similique quod et voluptate incidunt eum quia voluptatem quo doloribus voluptatum. Eos voluptatibus beatae et omnis amet in quis enim aut cumque galisum sed nisi reprehenderit ea corporis distinctio.
        </Typography>

        <Typography variant='body1'>
            Lorem ipsum dolor sit amet. Non repellat consequatur ut officiis ipsa sed rerum fuga ut iure dolorum est eius voluptas ut illum labore in molestiae odit! Qui atque impedit et nulla obcaecati qui repudiandae autem id unde itaque rem porro reprehenderit sed molestias voluptate vel ullam ducimus?
        </Typography>

        <Typography variant='body1' marginTop={4}>
            Non necessitatibus quia sit nobis voluptate ea explicabo reiciendis 33 tenetur eaque hic quam ipsum sit perspiciatis cupiditate ut voluptatum doloribus? Quo nisi expedita ab nemo reiciendis non ducimus laudantium eum dolor fuga et natus debitis est eligendi tempore At fuga sunt. Sed magni odit est ullam molestiae aut dolores iusto ut corrupti dignissimos At adipisci officia non omnis consequatur et suscipit sapiente. Aut quibusdam libero ut perspiciatis consequuntur aut veritatis dolor sit labore velit.
        </Typography>

        <Typography variant='body1' marginTop={4}>
            Est fuga temporibus nam facere aperiam sit quia adipisci? Et sequi fugiat At aspernatur adipisci sit necessitatibus dolor aut sequi eligendi sit saepe deserunt. A totam quia nam deserunt voluptatem eos autem dolorem id dolorum praesentium sed maxime sunt quo dolorem omnis.
        </Typography>

        <Typography variant='body1' marginTop={4}>
            Et nobis incidunt et consequatur quibusdam ut voluptatem ipsa id modi quod. Et iusto tempore non suscipit voluptas ut eius dignissimos ut officia dolor ut recusandae deserunt non rerum quia est laudantium laborum.
        </Typography>

        <Typography variant='body1' marginTop={4}>
            Et similique quod et voluptate incidunt eum quia voluptatem quo doloribus voluptatum. Eos voluptatibus beatae et omnis amet in quis enim aut cumque galisum sed nisi reprehenderit ea corporis distinctio.
        </Typography>
    </Dialog>;
}


export default TermsAndConditionsDialog;