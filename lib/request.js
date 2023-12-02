export default async function test() {
    let a = await fetch('http://localhost:3000/api/hello').then(res =>  res.json()).then(res=> res.message)
    return a
    
}