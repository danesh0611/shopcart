import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

const allBrands =[
  {
  id :1,brandName:'Puma'},
  {id :2,brandName:'Nike'},
  {id :3,brandName:'Adidas'},
  {id :4,brandName:'Reebok'},
  {id :5,brandName:'Under Armour'},
]


function App() {
  const[search,setsearch]=useState('')
  const[brands, setBrands] = useState(allBrands);

const searchchange =(event) =>{
  setsearch(event.target.value)
  const filtry = event.target.value?.length > 0? brands.filter((brand) =>
        brand.brandName.toLowerCase().includes(event.target.value?.toLowerCase())
      )
    : allBrands;
  setBrands(filtry)
  

}
return(
  <>
<p>add brand to cart</p>

  </>
)

}

export default App;
