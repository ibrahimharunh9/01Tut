import React from 'react'

function Content() {
    const handleChange = () => {
        const names = ['Harun','Musa','Bashir'];
        const int = Math.floor(Math.random()*3);
        return names [int];
    }
  return (
    <main>
        <p>Hello {handleChange()}!</p>
    </main>
  )
}

export default Content