import React from 'react'
import {SiGithub} from 'react-icons/si'
import {SiTwitter} from 'react-icons/si'
import Link from 'next/link'

const Header = () => {


  return (
     <div>
      <h1 className="text-4xl text-center cursor-pointer"> Viva Questions </h1>
      <div className="flex flex-row-reverse mb-4">
        {/* //TODO */}
        <div onClick={()=> window.location.href="www.google.com"}><SiGithub className="text-3xl ml-4 mr-4"/></div>
        <div><a href="www.google.com"><SiTwitter className="text-3xl"/></a></div>
      </div>
      </div>
  )
}

export default Header