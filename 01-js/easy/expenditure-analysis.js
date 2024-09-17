/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let shivanshu={};
  for(let i=0 ; i<transactions.length ; i++){
    let cat = transactions[i]["category"];
    if(shivanshu.hasOwnProperty(cat)){
      shivanshu[cat] = shivanshu[cat] + transactions[i]["price"];
    }else{
      shivanshu[cat] = transactions[i]["price"];

    }

  }
  let ans=[];
  for(let x of Object.keys(shivanshu)){
      let temp = {
        category : x,
        totalSpent : shivanshu[x]
      }
      ans.push(temp);
  }


  return ans;
}

module.exports = calculateTotalSpentByCategory;
