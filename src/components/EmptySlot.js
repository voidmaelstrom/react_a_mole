import { useEffect } from "react"
import MoleHill from '../assets/molehill.png'

function EmptySlot(props){

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} alt='molehill' src={MoleHill} />
        </div>
    )
}

export default EmptySlot