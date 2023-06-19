function calculateMinCost() {
  const roper= document.getElementById("rope-lengths")
	let lenarr= (roper.value).split(',')
	let sum=0;
	for(let i=0;i<lenarr.length;i++){
		lenarr[i]=Number(lenarr[i])
	}
	let gh=0
	while(lenarr.length!=1){
		lenarr.sort(function(a,b){return a-b})
		sum=lenarr[0]+lenarr[1]
		lenarr[1]=sum
		lenarr.shift()
		gh=gh+sum
	}
	const reser= document.getElementById("result")
	reser.innerText= gh
}  
