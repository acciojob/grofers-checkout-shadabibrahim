const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
		let prices= document.querySelectorAll('.price');
let grandTotal =0;
prices.forEach((price)=>{
	grandTotal +=  parseFloat(price.innerHTML)
})
let tr = document.createElement('tr');
let tdTotal = document.createElement('td');
	tdTotal.setAttribute('data-ns-test', 'grandTotal');
tdTotal.innerHTML = `Total Price (in Rs): ${grandTotal.toFixed(2)}`;
tr.appendChild(tdTotal);
document.querySelector("tbody").appendChild(tr);
  
};
let tr  = document.createElement('tr');

getSumBtn.addEventListener("click", getSum);

