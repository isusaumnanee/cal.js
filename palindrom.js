function check(str)
{
   if(str == str.split('').reverse().join('')){
       console.log('yes')
   }
   else{
       console.log('no')
   }
}
let input = process.openStdin()
input.addListener('data',data =>{
    check(data.toString().trim())
})