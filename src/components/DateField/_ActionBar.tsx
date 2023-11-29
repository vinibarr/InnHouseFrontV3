import { Box, IconButton } from "@mui/material";
import { PickersActionBarProps } from "@mui/x-date-pickers/PickersActionBar";
import { Backspace, Check, Close } from "@mui/icons-material";


interface IActionBarProps extends PickersActionBarProps {
    showClearButton?: boolean;
}


const ActionBar: React.FC<IActionBarProps> = ({
    onCancel,
    onAccept,
    onClear,
    showClearButton = false
}) => {
    return <Box className='display-flex justifycontent-spacebetween alignitems-center' padding={2}>
        <Box>
            <IconButton onClick={onCancel} className='backgroundcolor-grey'>
                <Close />
            </IconButton>

            {
                showClearButton && <IconButton onClick={onClear} className='backgroundcolor-grey' sx={{ marginLeft: 1 }}>
                    <Backspace />
                </IconButton>
            }
        </Box>

        <IconButton onClick={onAccept} className='color-white backgroundcolor-blue'>
            <Check />
        </IconButton>
    </Box>;
}


export default ActionBar;