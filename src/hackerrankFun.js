function fizzBuzz(n) {
    if (n) {
        for(let i = 1; i < n+1; i++) {
            let output = ''
            if (i % 3 === 0) output += 'Fizz'
            if (i % 5 === 0) output += 'Buzz'
            console.log(output || i)
        }
    } else {
        console.log('NONE')
    }
}

function filledOrders(order, k) {
    order.sort((a, b) => (a - b))
    
    let numberOfOrders = 0;

    for (let x of order) {
        if (x <= k) {
            numberOfOrders++;
            k -= x;
        } else {
            break;
        }
    }

    return numberOfOrders;
}

function getMinCost(crew_id, job_id) {
    crew_id.sort((a, b) => a - b);
    job_id.sort((a, b) => a - b);

    return crew_id.reduce((totalCost, crew, index) => 
        totalCost + Math.abs(crew - job_id[index]), 0);
}