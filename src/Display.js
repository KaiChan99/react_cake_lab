
const Display = () => {


    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ]
    



return (

<section>
<img src="./CaterpillarCake.webp" alt="picture of Colin the Caterpillar" />

<div> {cakes[0].cakeName} 
   <ul> {cakes[0].ingredients.map(ingredient => { return <li> {ingredient} </li> })} </ul>
   <ul> rating : {cakes[0].rating}</ul>
</div>

<div> {cakes[1].cakeName} 
<ul> {cakes[1].ingredients.map(ingredient => { return <li> {ingredient} </li> })} </ul>
<ul> rating : {cakes[1].rating}</ul>
</div>

<div> {cakes[2].cakeName} 
<ul> {cakes[2].ingredients.map(ingredient => { return <li> {ingredient} </li> })} </ul>
<ul> rating : {cakes[2].rating}</ul>
</div>

<div> {cakes[3].cakeName} 
<ul> {cakes[3].ingredients.map(ingredient => { return <li> {ingredient} </li> })} </ul>
<ul> rating : {cakes[3].rating}</ul>
</div>

</section>

)}

export default Display;