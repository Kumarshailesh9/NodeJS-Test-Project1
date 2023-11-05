function addProduct(e){
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const product = {
        name, 
        description,
        price,
        quantity
    };

    axios
        .post('http://localhost:3000/product', product)
        .then((res) => {
            console.log(res.data);
            displayProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};

axios
    .get('http://localhost:3000/product')
    .then((res) => {
        console.log(res.data);

        for(let i=0; i<res.data.length; i++){
            displayProduct(res.data[i]);
        }
    })


function displayProduct(products){
    const pNode = document.getElementById('items');
    const cNode = `<li id= "${products.id}">${products.name}--${products.description}--${products.price}--${products.quantity}
                    <button onclick="buyOne('${products.id}','${products.name}','${products.quantity}','${products.description}','${products.price}')">BUY1</button>
                    <button onclick="buyTwo('${products.id}','${products.name}','${products.quantity}','${products.description}','${products.price}')">BUY2</button>
                    <button onclick="buyThree('${products.id}','${products.name}','${products.quantity}','${products.description}','${products.price}')">BUY3</button>
                    </li>`

    pNode.innerHTML = pNode.innerHTML + cNode;
};

function buyOne(id,name,quantity,description,price){
    axios
        .put(`http://localhost:3000/product/${id}`, {
            name: name,
            description,
            price,
            quantity: quantity-1
        })
        .then((res) => {
            quantity -= 1;
            console.log('Product Buy and its successfully decrement from quantity!');
           // displayProduct(res.data);

        }) .catch(err => console.log(err));
};

function buyTwo(id,name,quantity,description,price){
    axios
        .put(`http://localhost:3000/product/${id}`, {
            name: name,
            description,
            price,
            quantity: quantity-2
        })
        .then((res) => {
            quantity -= 1;
            console.log('Product Buy and its successfully 2 product decrement from quantity!');
            //displayProduct(res.data);

        }) .catch(err => console.log(err));
};

function buyThree(id,name,quantity,description,price){
    axios
        .put(`http://localhost:3000/product/${id}`, {
            name: name,
            description,
            price,
            quantity: quantity-3
        })
        .then((res) => {
            quantity -= 1;
            console.log('Product Buy and its successfully 2 product decrement from quantity!');
            //displayProduct(res.data);

        }) .catch(err => console.log(err));
};




