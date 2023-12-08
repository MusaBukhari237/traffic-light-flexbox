'use client';

import React from 'react'

export default function FlexBox() {

    const [orientation, setOrientation] = React.useState('row');

  return (
    <div className="flex justify-center h-screen items-center">
      <div className={`bg-gray-500 w-fit h-fit p-4 rounded-full flex flex-${orientation} gap-4 justify-between`}>
         <div className="bg-red-600 rounded-full w-40 h-40"></div> 
         <div onClick={() => setOrientation(orientation === 'col' ? 'row': 'col')} className="bg-yellow-400 rounded-full w-40 h-40"></div> 
         <div className="bg-green-600 rounded-full w-40 h-40"></div> 
    </div>
    </div>
  )
}
