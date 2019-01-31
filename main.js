let input = process.openStdin()

let cal =require('./cal1.js')

console.log("Please input Square Centimeter :")
input.addListener('data',data =>{
	if(data.toString().trim() === 'exit'){
		process.exit();
	}
	else if(!isNaN(data)&& data >=0){
		console.log('\nSquare Inch :'+cal.sq_in(parseInt(data)))
		console.log('Square foot :'+cal.sq_ft(parseInt(data)))
		console.log('Square Meter :'+cal.sq_m(parseInt(data)))
	}
	else{
		console.log('Please unsigned number')
	}
})