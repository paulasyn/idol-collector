import React from 'react'
import { Deck } from '../lib/interfaces'
import Image from 'next/image'

interface Props {
	params: { deck: Deck }
}

const DeckCard = ({params: { deck }}: Props ) => {
  return (
	<div className='p-2'>
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a href={`/decks/${deck.deck_id}`}>
				<Image className="rounded-t-lg" width={400} height={400} src={`${deck.deck_photo_loc}`} alt="" />
			</a>
			<div className="p-5">
				<a href={`/decks/${deck.deck_id}`}>
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{deck.deck_name}</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Date Created: {deck.date_created}</p>
				<p>Group: {deck.deck_group_assoc}</p>
				<p>User: {deck.deck_user_id}</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Cards: {deck.deck_cards.length}</p>
				<a href={`/decks/${deck.deck_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Open
					<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
					</svg>
				</a>
			</div>
		</div>
	</div>
	
  )
}

export default DeckCard