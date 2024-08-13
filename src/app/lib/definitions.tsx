import { List } from "postcss/lib/list"

export type User = [
    {
        user_id: string,
        user_name: string,
        user_email: string,
        password: string,
        date_created: Date,
    }
]

export type Card = [
    {
        card_id: string,
        card_idol: string,
        card_group: string,
        card_original_user_id: string,
        date_created: Date,
    }
]

export type Idol = [
    {
        idol_id: string,
        idol_name: string,
        idol_group: string,
        idol_generation: number,
        date_created: Date,
    }
]

export type Group =  [
    {
        group_id: string,
        group_name: string,
        group_members: Idol[],
        date_created: Date,
    }
]