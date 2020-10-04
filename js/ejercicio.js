
const product_name = document.querySelector('.product_name')
const product_price = document.querySelector('.product_price')

const product_table_body = document.querySelector('#product_table_body')

const text_price = document.querySelector("#text_price")

const array_price = []

const setElemestTableBody = _ => {
    
    const row = product_table_body.insertRow(0)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    cell1.innerHTML = product_name.value
    cell2.innerHTML = product_price.value

    array_price.push(parseInt(product_price.value))
    sumTotalPrice()
    console.log(array_price)
}

const sumTotalPrice = _ => {
    let suma = 0
    if (array_price !== "") {
        array_price.map(price => {
            suma += price
        })
    }
    text_price.textContent = suma
}

sumTotalPrice()