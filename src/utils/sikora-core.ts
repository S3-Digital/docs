import { SIKORA_POLICY } from '../config';

export function getDaysToExpiry(expiryDate: string): number {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function getSecurityLevel(days: number): 'safe' | 'warning' | 'danger' {
    if (days > SIKORA_POLICY.security.warningThreshold) return 'safe';
    if (days > SIKORA_POLICY.security.dangerThreshold) return 'warning';
    return 'danger';
}