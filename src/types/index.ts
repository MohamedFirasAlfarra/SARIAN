import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export type Language = 'ar' | 'en';

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

export interface Order {
    id: string;
    products: Product[];
    total: number;
}
