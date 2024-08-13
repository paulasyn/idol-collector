import React from 'react'
import sort from 'fast-sort'
import { Deck } from '../lib/interfaces'
import { cards, decks, idols, users, groups } from '../lib/placeholder-data'
import DeckTable from './DeckTable'

const Decks = async () => {	
	const decksData: Deck[] = decks;
	
	return (
		<div>
			<div><h1>Decks</h1></div>
			<DeckTable decksData={decksData} />
		</div>
	)
}

export default Decks