// function getData(dataId) {
// 	console.log("data", dataId);
// }
// getData(213)

function getData(dataId, getNextData) {// after 2 sec
	setTimeout(() => {
		console.log("data", dataId);
		if(getNextData) {
			getNextData();
		}	
	}, 2000);
}


// getData(1, getData(2)) 
// next data ke liye humne ushi function ko use kiya hai jo 1st ke liye use hua hai
// but we'll get error if we right like above

// correct method is 

// getData(id, () => {
// 	getData(id, () => {})
// })

getData(1, () => {
	getData(2, () => {
		getData(3, () => {
			getData(4, () => {
				getData(5, () => {
					getData(6)
				})
			})
		})
	})
});

