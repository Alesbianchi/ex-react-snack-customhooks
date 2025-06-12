
import { useState, useCallback } from "react";

function useSwitch() {
    const [value, setValue] = useState(false);

    const toggle = useCallback(() => {
        setValue(prev => !prev);
    }, []);

    return [value, toggle];
}

export default useSwitch;
