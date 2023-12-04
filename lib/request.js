export default async function test() {
    let a = await fetch('http://localhost:3000/api/hello?one=1&two=2').then(res =>  res.json()).then(res=> res.message)
    return a
    
}