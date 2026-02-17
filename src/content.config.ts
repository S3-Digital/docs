export const SIKORA_CONFIG = {
	siteName: "Sikora Digital Portal",

	// Centralny rejestr działów - to stąd moduły biorą "instrukcje"
	departments: {
		marketing: {
			name: "Growth & Marketing",
			color: "#00d1b2",
			manager: "Ania Nowak",
			kpiThreshold: 15 // np. alarmuj poniżej 15% konwersji
		},
		it: {
			name: "IT & Infrastructure",
			color: "#3273dc",
			manager: "Marek Kowalski",
			sslBufferDays: 30 // alarmuj 30 dni przed wygaśnięciem
		},
		video: {
			name: "Video Production",
			color: "#ff3860",
			manager: "Krzysiek Kamera"
		}
	},

	// Globalne linki do zewnętrznych narzędzi (API endpoints)
	endpoints: {
		cloudflare: "https://api.cloudflare.com/client/v4/",
		analytics: "https://analytics.google.com/..."
	}
};