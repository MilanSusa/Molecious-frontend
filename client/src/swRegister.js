export const register = () => {
    const swPath = `${process.env.PUBLIC_URL}/sw.js`;
    if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'production') {
        window.addEventListener('load', async () => {
            await navigator.serviceWorker.register(swPath);
        });
    }
};