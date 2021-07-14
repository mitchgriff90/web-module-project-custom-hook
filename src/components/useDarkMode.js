import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = param => {
    const [dark, setDark] = useLocalStorage( 'dark-mode', param);

    return [dark, setDark];
}