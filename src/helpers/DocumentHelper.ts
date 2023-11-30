

const setTitle = (title: string) => {
    document.title = title;
}


const setFavIcon = (path: string) => {
    const favIcon = document.getElementById('favicon') as HTMLLinkElement | null;

    if (favIcon != null) {
        favIcon.href = path;
    }
}


const setManifest = (name: string) => {
    const manifest = document.getElementById('manifest') as HTMLLinkElement | null;

    if (manifest != null) {
        manifest.href = `${manifest.href.split('/manifest')[0]}/manifest.${name.toLowerCase()}.json`;
    }
}


const DocumentHelper = {
    setTitle,
    setFavIcon,
    setManifest
}


export default DocumentHelper;