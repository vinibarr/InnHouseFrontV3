
import './style.scss';
import { useRef, useState, useCallback, useEffect } from 'react';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { ArrowBack, Delete, Edit, ImageOutlined } from '@mui/icons-material';


interface IImageFieldProps {
    title?: string;
    name: string;
    alt?: string;
    defaultImage?: string;
    height: number;
    disabled?: boolean;
    required?: boolean;
    className?: string;
}


const ImageField: React.FC<IImageFieldProps> = ({
    title = undefined,
    name,
    alt = undefined,
    defaultImage = undefined,
    height,
    disabled = false,
    required = true,
    className = ''
}) => {
    const [image, setImage] = useState<string | undefined>(defaultImage);
    const [validator, setValidator] = useState<boolean>(false);

    const imageInputRef = useRef<HTMLInputElement | null>(null);


    useEffect(() => {
        setImage(defaultImage);
        setValidator(false);

        // eslint-disable-next-line
    }, [defaultImage]);


    const clearImageInput = useCallback(() => {
        if (imageInputRef.current) {
            imageInputRef.current.value = '';
        }
    }, [imageInputRef]);

    return (
        <>
            <Box className={`imagefield-default ${className}`} sx={{ height: height }}>
                {
                    title && <Typography variant='subtitle1' className='text-title'>{title}</Typography>
                }

                <Avatar alt={alt ?? `imagefield-${name}`} src={image} className='avatar-image'>
                    {
                        alt === undefined ? (
                            <ImageOutlined fontSize='large' />
                        ) : (
                            alt.charAt(0)
                        )
                    }
                </Avatar>

                <Box className='box-avataractions'>
                    {
                        !disabled && <>
                            {
                                validator && (
                                    <IconButton
                                        className='iconbutton-action'
                                        onClick={() => {
                                            setImage(defaultImage);
                                            setValidator(false);
                                            clearImageInput();
                                        }}
                                    >
                                        <ArrowBack className='icon-action' />
                                    </IconButton>
                                )
                            }

                            <IconButton className='iconbutton-action' onClick={() => imageInputRef.current && imageInputRef.current.click()}>
                                <Edit className='icon-action' />
                            </IconButton>

                            <IconButton
                                className='iconbutton-action'
                                onClick={() => {
                                    setImage(alt);
                                    setValidator(true);
                                    clearImageInput();
                                }}
                            >
                                <Delete className='icon-action' />
                            </IconButton>
                        </>
                    }
                </Box>

                <input
                    type='text'
                    name={`${name}Validator`}
                    value={validator.toString()}
                    className='display-none'
                />

                <input
                    ref={imageInputRef}
                    type='file'
                    accept='.png,.jpg,.jpeg'
                    multiple={false}
                    name={name}
                    className='display-none'
                    disabled={disabled}
                    required={required}
                    onChange={e => {
                        if (e.target.files && e.target.files.length > 0) {
                            setImage(URL.createObjectURL(e.target.files[0]));
                        }

                        setValidator(true);
                    }}
                />
            </Box>
        </>
    );
}

export default ImageField;