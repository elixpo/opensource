export const colors = {
    light: {
        bg: {
            deep: "#f8fafc",
            card: "rgba(255, 255, 255, 0.8)",
            cardGlass: "rgba(0, 0, 0, 0.03)",
            cardGlassHover: "rgba(0, 0, 0, 0.05)",
            overlay: "rgba(255, 255, 255, 0.95)",
            overlayLight: "rgba(255, 255, 255, 0.8)",
        },
        text: {
            primary: "#0f172a",
            secondary: "rgba(15, 23, 42, 0.8)",
            muted: "rgba(15, 23, 42, 0.6)",
            subtle: "rgba(0, 0, 0, 0.4)",
            disabled: "rgba(0, 0, 0, 0.3)",
        },
        border: {
            light: "rgba(0, 0, 0, 0.08)",
            medium: "rgba(0, 0, 0, 0.12)",
            strong: "rgba(0, 0, 0, 0.18)",
            hover: "rgba(0, 0, 0, 0.25)",
        },
    },
    dark: {
        bg: {
            deep: "#141a16",
            card: "rgba(16, 24, 12, 0.8)",
            cardGlass: "rgba(255, 255, 255, 0.05)",
            cardGlassHover: "rgba(255, 255, 255, 0.08)",
            overlay: "rgba(20, 26, 22, 0.95)",
            overlayLight: "rgba(20, 26, 22, 0.8)",
        },
        text: {
            primary: "#f5f5f4",
            secondary: "rgba(245, 245, 244, 0.8)",
            muted: "rgba(245, 245, 244, 0.7)",
            subtle: "rgba(255, 255, 255, 0.5)",
            disabled: "rgba(255, 255, 255, 0.4)",
        },
        border: {
            light: "rgba(255, 255, 255, 0.1)",
            medium: "rgba(255, 255, 255, 0.15)",
            strong: "rgba(255, 255, 255, 0.2)",
            hover: "rgba(255, 255, 255, 0.3)",
        },
    },
    // Shared accent colors
    lime: {
        main: "#a3e635",
        light: "#bef264",
        dim: "rgba(163, 230, 53, 0.15)",
        border: "rgba(163, 230, 53, 0.3)",
        glow: "rgba(163, 230, 53, 0.6)",
    },
    status: {
        success: { main: "#4ade80", bg: "rgba(34, 197, 94, 0.1)", border: "rgba(34, 197, 94, 0.3)" },
        warning: { main: "#fbbf24", bg: "rgba(251, 191, 36, 0.1)", border: "rgba(251, 191, 36, 0.3)" },
        error: { main: "#f87171", bg: "rgba(239, 68, 68, 0.1)", border: "rgba(239, 68, 68, 0.3)" },
        info: { main: "#818cf8", bg: "rgba(88, 101, 242, 0.15)", border: "rgba(88, 101, 242, 0.3)" },
    }
};

export const gradients = {
    textAccent: "linear-gradient(135deg, #a3e635 0%, #86efac 50%, #fbbf24 100%)",
    bgPage: "linear-gradient(135deg, #141a16 0%, #1c2420 50%, #141a16 100%)",
};

export const fonts = {
    body: '"DM Sans", -apple-system, BlinkMacSystemFont, sans-serif',
    display: '"Space Grotesk", "DM Sans", sans-serif',
};

export const theme = {
    colors,
    gradients,
    fonts,
};

export default theme;
