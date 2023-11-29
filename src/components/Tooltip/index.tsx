
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material';


const Tooltip: React.FC<TooltipProps> = (props) => {
    return (
        <MuiTooltip 
            title={props.title} 
            placement={props.placement ?? "left"} 
            arrow={true}
            disableInteractive={true}
        >
            {props.children}
        </MuiTooltip>
    );
}

export default Tooltip;