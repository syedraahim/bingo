import { Fireworks } from 'fireworks-js/dist/react'

const Celebrate = () => {
  const options = {
    speed: 3,
    rocketsPoint : 100,
    particles : 500,
    sound: {
      enabled: true,
      files: [
        "https://fireworks.js.org/sounds/explosion0.mp3",
        "https://fireworks.js.org/sounds/explosion1.mp3",
        "https://fireworks.js.org/sounds/explosion2.mp3"
      ],
      volume: {
        min: 1,
        max: 2
      }
    },  }

  const style = {
    top: 0,
    left: 0,
    width: '40%',
    height: '40%',
    position: 'absolute',
    
  }

  return <Fireworks options={options} style={style} />
}
export default Celebrate;