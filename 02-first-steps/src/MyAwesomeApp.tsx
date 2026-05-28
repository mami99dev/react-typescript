import type { CSSProperties } from "react"

const firstName = 'Isaac'
const lastName = 'Martinez'

const favoriteSports = ['Soccer', 'Ping pong', 'Swimming']
const isActive = true

const address = {
  country: 'MX',
  zipCode: '54080'
}

const myStyle: CSSProperties = {
  backgroundColor: '#331299',
  color: '#aabbcc',
  padding: 10,
  borderRadius: 35
}

export function MyAwesomeApp() {
  return (
    <>
      <h1 data-testid='first-name-title'>{firstName}</h1>
      <h3
        style={{
          backgroundColor: '#fff055',
          borderRadius: 10,
          padding: 10
        }}
      >
        {lastName}
      </h3>

      <p>{favoriteSports}</p>
      <p>{favoriteSports.join(', ')}</p>

      <h1>{isActive}</h1>
      <h2>{isActive ? 'Activo' : 'No activo'}</h2>

      <p style={myStyle}>{JSON.stringify(address)}</p>
    </>
  )
}