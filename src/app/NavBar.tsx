import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
	<div className='flex bg-slate-200 p-5'>
		<Link href='/' className='mr-5'>Home</Link>
		<Link href='/decks' className='mr-5'>Decks</Link>	
	</div>
  )
}

export default NavBar