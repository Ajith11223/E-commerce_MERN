import {Routes,Route,Navigate} from 'react-router-dom'
import {Home} from './pages/Home'
import {ProductList} from './pages/ProductList'
import {Product} from './pages/Product'
import {Login} from './pages/Login'
import {Cart} from './pages/Cart'
import {Register} from './pages/Register'

function App() {
  const user = true
 
  return (
    <div>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/products/:category' element={<ProductList/>}/>
  <Route path='/product/:id' element={<Product/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login'  element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>

</Routes>

    </div>
  );
}

export default App;
