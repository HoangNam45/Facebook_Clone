export const days = Array.from({ length: 31 }, (_, i) => i + 1);

export const months = Array.from({ length: 12 }, (_, i) => i + 1);

export const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
