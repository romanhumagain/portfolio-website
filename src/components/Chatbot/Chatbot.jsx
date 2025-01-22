import React, { useState } from 'react'
import my_img from '../../assets/images/pp.jpg'


const Chatbot = ({handleChatBotModalOpen}) => {
  
  return (
    <div className='cursor-pointer'>
      <img src={my_img} className='animate-popup fixed object-cover w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full right-6 bottom-[96px] md:right-10 md:bottom-[115px] hover:scale-105 hover:shadow-lg duration-700'
        onClick={handleChatBotModalOpen}></img>
    </div>
  )
}

export default Chatbot