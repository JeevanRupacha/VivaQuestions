import React from 'react'
import {SiGithub} from 'react-icons/si'
import {SiTwitter} from 'react-icons/si'

const Header = () => {


  return (
     <div>
      <h1 className="text-4xl text-center cursor-pointer"> Viva Questions </h1>
      <div className="flex flex-row-reverse mb-4">
        {/* //TODO */}
        <div className="cursor-pointer" ><a href="/github" target="blank"><SiGithub className="text-3xl ml-4 mr-4"/></a></div>
        <div className="cursor-pointer"><a href="/twitter" target="blank"><SiTwitter className="text-3xl"/></a></div>
      </div>
      </div>
  )
}

export default Header