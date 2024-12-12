export interface IItems {
    listing_id: number;
    url: string;
    MainImage: { url_570xN: string | undefined};
    title: string;
    currency_code?: string;
    price?: string;
    quantity: number;
    state: string;
}