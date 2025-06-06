export function toLocalISOString(date) {
    return date.toLocaleString("fr-FR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false // 24h format
    }).replace(/\//g, "-").replace(",", "T").trim();
}