const useState = (firstName: string) => {
  return [
    firstName, 
    (secondName: string) => { console.log(secondName) }
  ] as const // Si no se pone as const el setName puede ser cualquier valor y al momento de invocarlo me daria un error
}

const [name, setName] = useState('Goku') 
console.log(name)
setName('Vegeta')