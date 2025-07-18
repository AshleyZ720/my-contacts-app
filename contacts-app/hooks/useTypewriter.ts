import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 50, delay: number = 0) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        // Initial delay before starting
        const startTimeout = setTimeout(() => {
            setIsTyping(true);
        }, delay);

        if (isTyping && currentIndex < text.length) {
            timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
        }

        return () => {
            clearTimeout(timeout);
            clearTimeout(startTimeout);
        };
    }, [text, speed, delay, currentIndex, isTyping]);

    return displayText;
} 