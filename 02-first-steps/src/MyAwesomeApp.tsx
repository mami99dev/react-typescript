const firstName = 'Isaac'
const lastName = 'Martinez'

const favoriteSports = ['Soccer', 'Ping pong', 'Swimming']
const isActive = true

const address = {
  country: 'MX',
  zipCode: '54080'
}

export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteSports}</p>
      <p>{favoriteSports.join(', ')}</p>

      <h1>{isActive}</h1>
      <h2>{isActive ? 'Activo' : 'No activo'}</h2>

      <p>{JSON.stringify(address)}</p>
    </>
  )
}