import { useEffect, useState } from "react"

const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min) + min)

export default function Header() {
  const description = "I’m a Cloud Software Engineer with professional experience backend development and devops. Interested in mostly in backend development (and some frontend), infrastructure, systems, compilers, and CS in general."
  
  useEffect(() => {
    const chosen = randomNumberRange(128512, 128567)
    const emojiElement = document.getElementById('emoji')
    emojiElement.innerHTML = `&#${chosen};`
  }, [])

  const [name, setName] = useState('Manuel Esparza')
  const nameHandler = () => setName('Manolo Esparta')

  return (
    <header>
      <h1>
        <span id="emoji" onClick={nameHandler}></span> 
        <span> {name}</span>
      </h1>
      <p>{description}<span class="bold"> Never stop learning.</span></p>
    </header>
  )
}