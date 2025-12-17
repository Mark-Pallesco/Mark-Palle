import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button') || e.target.classList.contains('cursor-pointer')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const borderColor = theme === 'dark' ? "rgba(255, 255, 255, 0.5)" : "rgba(15, 23, 42, 0.5)";
    const hoverBorderColor = theme === 'dark' ? "rgba(255, 255, 255, 0.8)" : "rgba(15, 23, 42, 0.8)";
    const hoverBgColor = theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(15, 23, 42, 0.1)";

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "transparent",
            border: `1px solid ${borderColor}`,
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            backgroundColor: hoverBgColor,
            border: `1px solid ${hoverBorderColor}`,
            transition: {
                type: "spring",
                mass: 0.6
            }
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 1
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 0
        }
    };

    return (
        <>
            {/* Main Cursor Circle */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
            />
            {/* Center Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-slate-900 dark:bg-white rounded-full pointer-events-none z-[9999]"
                variants={dotVariants}
                animate={isHovering ? "hover" : "default"}
            />
        </>
    );
}
