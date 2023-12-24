import { useState } from "react";


const useForceRender = () => {
    // eslint-disable-next-line
    const [_, setForceRender] = useState<number>(0);

    return () => {
        setForceRender(Math.random());
    }
}

export default useForceRender;