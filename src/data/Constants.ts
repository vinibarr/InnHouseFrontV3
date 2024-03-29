
const { REACT_APP_API_URL } = process.env;
const baseUrl = window.location.href ?? '/';


const DefaultConstants = {
    developer: {
        name: "Brazil Sales",
    },

    publicUrl: '/',
    apiUrl: `${REACT_APP_API_URL ?? baseUrl}/`,
    
    system: {
        name: 'Inn House',
        logo: 'assets/images/logo.png',
        logoHorizontal: 'assets/images/logoHorizontal.png',
        icon: 'assets/images/icon.png',
        favIcon: 'assets/images/favIcon.png'
    },

    gridRowSpacing: 2,
    gridColumnSpacing: 2,

    googleMaps: {
        id: 'google-map-inn-house',
        apiKey: 'AIzaSyB5I7chQarmuWcrxOU9v3s2AVxx7yjWGhk'
    }
};

const systemNameFormatted = DefaultConstants.system.name.toLowerCase().replace(/ /g, '').toLowerCase();
const StorageConstants = {
    languageStorageName: `${systemNameFormatted}_currentlanguage`,
    authTokenStorageName: `${systemNameFormatted}_authtoken`,
}


const KeyConstants = {
    privateKey: 'jz4ii5k7e7ujmstz'
}


export {
    StorageConstants,
    KeyConstants
}

export default DefaultConstants;

