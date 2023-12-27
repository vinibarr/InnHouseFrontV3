

const imageExtensions = ['png', 'jpg', 'jpeg'];

const IsImage = (name: string | undefined) => {
    if (!name) {
        return false;
    }
    
    const extension = GetExtension(name);
    return imageExtensions.some(ext => extension === ext);
}


const IsPdf = (name: string | undefined) => {
    if (!name) {
        return false;
    }
    
    const extension = GetExtension(name);
    return extension === 'pdf';
}


const GetExtension = (name: string | undefined) => {
    if (!name) {
        return '';
    }
    
    return name.split('.')?.pop()?.toLowerCase();
}


const FileHelper = {
    IsImage,
    IsPdf,
    GetExtension
}

export default FileHelper;