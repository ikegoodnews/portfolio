import { useEffect, useState } from "react";
import {Moon} from '@/_components';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const shouldUseDark = saved ? saved === "dark" : prefersDark;

        setIsDark(shouldUseDark);
        document.documentElement.classList.toggle("dark", shouldUseDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark", newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    return (
        <button onClick={toggleTheme} className="px-4 py-2 rounded bg-[var(--color-4)] text-[var(--color-1)]">
            {/* Switch to {isDark ? "Light" : "Dark"} Mode */}
            <Moon />
        </button>
    );
};

export default ThemeToggle;
