import Link from 'next/link'
import React from 'react'

const navbar = () => {
   return (
      <div>
         <ul>

            <li>
               <Link href='/home'>Home </Link>
            </li>

            <li>Contact</li>
            <li>About us</li>
            <li>Portfolio</li>
         </ul>
      </div>
   )
}

export default navbar