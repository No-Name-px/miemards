export interface BankCard {
    number: string;
    exp_date: string;
    cvv: string;
}

export interface BankCards {
    [id: string]: BankCard;
}
