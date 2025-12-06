async function fetchData() {
  const respond = await fetch("https://fakestoreapi.com/products");
  if (!respond.ok) {
    throw new Error("API Failed!");
  }
  const data = await respond.json();
  return data;
}

let di = document.getElementById("products");

async function displayProducts() {
  try {
    let product = await fetchData();
    di.innerHTML = "";
    product.forEach((element) => {
      di.innerHTML += `
        <div class="prod-card">
           <h3 class="ti">${element.title}</h3>
           <div class="img">
              <img src="${element.image}" alt="product ${element.id}" id="i">
           </div> 
           <p class="disc">${element.description}</p>
           <p class="catg"><span>Category : </span>${element.category}</p>
           <p class="catg"><span>Price : </span> $ ${element.price}</p>
           <p class="catg"><span>Rating : </span>${element.rating.rate} (based on ${element.rating.count} reviews)</p>
        </div>
       `;
       di.appendChild(product);
    });
  } catch (error) {
    di.innerHTML = `<p>Failed to load products </p>`;
    console.error(error);
  }
}

displayProducts();