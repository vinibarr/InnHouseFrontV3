
import { createHashHistory } from 'history';
import DefaultConstants from '../data/Constants';


const history = createHashHistory({
    basename: DefaultConstants.publicUrl
});


export {
    history
}