

// Registration Status
export enum AccessProfileEnum {
    Administrator = 1,
    Support = 2,
    Owner = 100,
    Broker = 200,
    Guest = 300
}

interface IAccessProfileData {
    id: number;
    name: string;
}

export const AccessProfileData: Record<AccessProfileEnum, IAccessProfileData> = {
    [AccessProfileEnum.Administrator]: {
        id: AccessProfileEnum.Administrator,
        name: 'administrator',
    },
    [AccessProfileEnum.Support]: {
        id: AccessProfileEnum.Support,
        name: 'support',
    },
    [AccessProfileEnum.Owner]: {
        id: AccessProfileEnum.Owner,
        name: 'owner',
    },
    [AccessProfileEnum.Broker]: {
        id: AccessProfileEnum.Broker,
        name: 'broker',
    },
    [AccessProfileEnum.Guest]: {
        id: AccessProfileEnum.Guest,
        name: 'guest',
    }
}