// PLIK: src/config.ts
// Ten plik musi leżeć w folderze src, obok content.config.ts

export const SIKORA_POLICY = {
    security: {
        warningThreshold: 30, // dni do żółtego alertu
        dangerThreshold: 7    // dni do czerwonego alertu
    }
};

export const SIKORA_CONFIG = {
    siteName: "Sikora Digital Portal",
    companyName: "Sikora Digital",
    departments: {
        marketing: { name: "Growth & Marketing", color: "#00d1b2" },
        it: { name: "IT & Infrastructure", color: "#3273dc" }
    }
};