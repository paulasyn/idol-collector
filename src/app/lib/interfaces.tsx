export interface Idol {
        idol_id: string,
        idol_name: string,
        idol_group: string,
        idol_generation: number,
        date_created: Date,
    }

export interface Group {
	group_id: string,
	group_name: string,
	group_members: Idol[],
	date_created: Date,
}

export interface User{
	user_id: string,
	user_name: string,
	user_email: string,
	password: string,
	date_created: Date,
}

export interface Deck {
	deck_id: string,
	deck_cards: Card[],
	deck_name: string,
	deck_group_assoc: string,
	deck_user_id: string,
	date_created: string,
	deck_photo_loc: string,
	
}

export interface Card {
	card_id: string,
	card_idol: string,
	card_group: string,
	card_album: string,
	card_original_user_id: string,
	group_photo: boolean,
	date_created: string,
	card_photo_loc: string,
}