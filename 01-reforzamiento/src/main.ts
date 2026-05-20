import './style.css'
import './bases/02-template-strings'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
  <h1>Hola Mundo</h1>
</div>
`
