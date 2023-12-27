
import './style.scss';
import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Close, InsertDriveFileOutlined } from '@mui/icons-material';
import FileHelper from '../../helpers/FileHelper';
import { IMuiIcon } from '../../interfaces/IMaterial';


interface IAttachmentCardProps {
    url: string;
    name: string;
    className?: string;
    onRemove?: () => void;
    Icon?: IMuiIcon;
}


const AttachmentCard: React.FunctionComponent<IAttachmentCardProps> = ({
    url,
    name,
    className = '',
    onRemove = undefined,
    Icon = undefined
}) => {
    const renderContent = () => {
        const isImage = FileHelper.IsImage(name);
        
        if (isImage) {
            return <img
                src={url}
                alt={name}
                loading="lazy"
            />;
        }

        const AttachIcon = Icon ?? InsertDriveFileOutlined;

        return <>
            <AttachIcon className='file-icon' />
            <Typography className='file-name'>{name}</Typography>
        </>;
    }


    return (
        <>
            <Box className={`attachmentcard-default ${className}`}>
                {
                    onRemove && (
                        <IconButton className='file-remove' size='small' onClick={() => onRemove()}>
                            <Close fontSize='inherit' />
                        </IconButton>
                    )
                }

                {
                    renderContent()
                }
            </Box>
        </>
    );
}

export default AttachmentCard;