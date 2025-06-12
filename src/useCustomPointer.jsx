import { useEffect, useRef, useState } from "react";

function useCustomPointer(content) {
    const pointerRef = useRef(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Nascondi il cursore originale
        document.body.style.cursor = "none";

        // Mouse move listener
        const handleMouseMove = (e) => {
            setCoords({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            // Ripristina il cursore e rimuove listener
            document.body.style.cursor = "default";
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // JSX per il nuovo puntatore
    return (
        <div
            ref={pointerRef}
            style={{
                position: "fixed",
                top: coords.y,
                left: coords.x,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                zIndex: 9999,
                fontSize: "2rem",
            }}
        >
            {typeof content === "string" ? <span>{content}</span> : content}
        </div>
    );
}

export default useCustomPointer;