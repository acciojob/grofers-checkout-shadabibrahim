const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
		let prices= document.querySelectorAll('.price');
let grandTotal =0;
prices.forEach((price)=>{
	grandTotal +=  parseInt(price.innerHTML)
})
let tr = document.createElement('tr');
	 tr.id = "ans";
let tdTotal = document.createElement('td');
tdTotal.innerHTML = `Total Price (in Rs): ${grandTotal.toFixed(2)}`;
tr.appendChild(tdTotal);
document.querySelector("tbody").appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

