export const slideUp = {
    closed: { y: 20, opacity: 0 },
    open: (index) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: index * 0.01, 
            duration: 0.3, 
            ease: "easeOut"
        }
    })
};
