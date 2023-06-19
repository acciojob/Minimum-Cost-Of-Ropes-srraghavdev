function calculateMinCost() {
  const roper= document.getElementById("rope-lengths")
	let lenarr= parseInt((roper.value).split(','))
	let sum=0;
	while(lenarr.length!=1){
		lenarr.sort()
		sum=lenarr[0]+lenarr[1]
		lenarr[1]=sum
		lenarr.shift()
	}
	sum=lenarr[0]+sum
	cont reser= document.getElementById("result")
	reser.innerText= sum
}  
