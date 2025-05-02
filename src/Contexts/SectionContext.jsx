// src/Contexts/SectionContext.jsx
import React, { createContext, useContext, useState } from "react";

const SectionContext = createContext(null);

export const SectionProvider = ({ children }) => {
    const [currentSection, setCurrentSection] = useState("inicio");

    return (
        <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
            {children}
        </SectionContext.Provider>
    );
};

// ✅ hook separado, exportación estable
export const useSection = () => {
    const context = useContext(SectionContext);
    if (!context) {
        throw new Error("useSection debe usarse dentro de un SectionProvider");
    }
    return context;
};
