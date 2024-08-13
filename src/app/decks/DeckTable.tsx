import React from 'react'
import DeckCard from './DeckCard'
import { Deck } from '../lib/interfaces'

interface Props {
	decksData: Deck[],
}

const DeckTable = ({ decksData } : Props) => {
  return (
		<div>
			{decksData.map((deck) => (
				<DeckCard key={deck.deck_id} params={{ deck }} />
			))}
		</div>
  )
}

export default DeckTable