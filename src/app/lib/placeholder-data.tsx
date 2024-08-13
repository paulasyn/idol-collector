export const users = [
    {
        user_id: "001",
        user_name: "test_user",
        user_email: "test_user@example.com",
        password: "test_user",
        date_created: "2022-01-01",
    }
]

export const cards = [
    {
        card_id: "001",
        card_idol: "Jennie",
        card_group: "blackpink",
		card_album: "test_album",
        card_original_user_id: "001",
        group_photo: false,
        date_created: "2022-01-01",
		card_photo_loc: "/cardPhotos/BLACKPINK-4-1-POP-UP-Photocards-SCANS-documents-1 (1).jpeg",
    },
	{
        card_id: "002",
        card_idol: "Rose",
        card_group: "blackpink",
		card_album: "test_album",
        card_original_user_id: "001",
        group_photo: false,
        date_created: "2022-01-01",
		card_photo_loc: "/cardPhotos/BLACKPINK-4-1-POP-UP-Photocards-SCANS-documents-1 (1).jpeg",
    },
	{
        card_id: "003",
        card_idol: "Lisa",
        card_group: "blackpink",
		card_album: "test_album",
        card_original_user_id: "001",
        group_photo: false,
        date_created: "2022-01-01",
		card_photo_loc: "/cardPhotos/BLACKPINK-4-1-POP-UP-Photocards-SCANS-documents-1 (1).jpeg",
    },
	{
        card_id: "004",
        card_idol: "Jisoo",
        card_group: "blackpink",
		card_album: "test_album",
        card_original_user_id: "001",
        group_photo: false,
        date_created: "2022-01-01",
		card_photo_loc: "/cardPhotos/BLACKPINK-4-1-POP-UP-Photocards-SCANS-documents-1 (1).jpeg",

    }
]

export const idols = [
    {
        idol_id: "001",
        idol_name: "Jennie",
        idol_group: "blackpink",
        idol_generation: 4,
        date_created: "2022-01-01",
    }
]

export const decks = [
	{
		deck_id: "001",
		deck_cards: cards,
		deck_name: "test_deck",
		deck_group_assoc: "blackpink",
		deck_user_id: "001",
		date_created: "2022-01-01",
		deck_photo_loc: "/cardPhotos/BLACKPINK-4-1-POP-UP-Photocards-SCANS-documents-1 (1).jpeg",
	},
	{
		deck_id: "002",
		deck_cards: cards,
		deck_name: "test_deck",
		deck_group_assoc: "blackpink",
		deck_user_id: "001",
		date_created: "2022-01-01",
		deck_photo_loc: "/cardPhotos/BLACKPINK-4-1-POP-UP-Photocards-SCANS-documents-2 (1).jpeg",
	}
]

export const groups =  [
    {
        group_id: "001",
        group_name: "test_group",
        group_members: ["Lisa", "Rose", "Jennie", "Jisoo"],
		assoc_decks: ["001"],
        date_created: "2022-01-01",
    }
]