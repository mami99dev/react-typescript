import './style.css'
import './bases/10-imp-exp'
import { getVillainsByOwner } from './bases/10-imp-exp'
import { VillainOwner } from './bases/data/heroes.data'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
  <h1>Hola Mundo</h1>
</div>
`

console.log(getVillainsByOwner(VillainOwner.Marvel))