// src/useDate.jsx
import { useState, useEffect } from "react";

function useDate() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // Pulizia intervallo quando il componente viene smontato
        return () => clearInterval(intervalId);
    }, []);

    return date;
}

export default useDate;
