

const DistinctBy = <T>(array: T[], key: keyof T) => {
    return [
        ...new Map(
            array.map(item => {
                return [item[key], item];
            })
        ).values()
    ];
}


const ArrayHelper = {
    DistinctBy
};

export default ArrayHelper;