import React, {useState} from 'react';
import options from './options.json';
import './Picker.css';
import Select from 'react-select';
import { InputNumber } from 'rsuite';

const Picker = () => {
var borrar = (dltproducto) => {
  console.log(dltproducto.value)
var newareglo = almacenProductos.filter(dlt=>dlt.value!==dltproducto.value);
almacenProductos=newareglo;
setalmacenProductos(almacenProductos);

}

const addprice = ( precio ) => {
  setPrecios([...allPrecios,precio])
console.log(allPrecios)
}
  const [allPrecios, setPrecios] = useState([]);
  const [productosSeleccionado, setproductosSeleccionado] = useState([]);
  var [almacenProductos, setalmacenProductos] = useState([]);

const handleSeleccion = ( eleccion ) => {
  const newproducto = eleccion;
  console.log(newproducto)
setproductosSeleccionado([productosSeleccionado,newproducto]);
setalmacenProductos([...almacenProductos, newproducto]);

}
const TotalProductos = ( cant, product_to_buy) =>{
  var precio_string = product_to_buy.split('$')
  var precio = parseFloat(precio_string[1])
var total = (parseInt(cant)*precio);
 addprice(total)
 sumartotal()
}

const sumartotal = () => {
  let suma = 0; // Inicializamos la variable suma en 0

  for (let i = 0; i < allPrecios.length; i++) {
    suma += allPrecios[i]; // Agregamos el valor actual del arreglo a la suma
  }
 
};


 

  

  return (
    <table border='2px' className='tabla'>
    <tr className='pickerContainer'>
      
     <td> 
      <div className='picker'>
        <Select 
options = { options.map(arr=>({label:arr.nombre+" $"+arr.precio, value:arr.id})) }      
      onChange={handleSeleccion}
      />
      </div>
      </td>
      </tr>

  {almacenProductos.map((arr_pro) => (
    
    <tr>
    <td><p className='pickeritems' key={arr_pro.value}>{arr_pro.label}<InputNumber onChange={(value)=>TotalProductos(value,arr_pro.label)} className='input' max={100} min={0}/><button className='boton'  onClick={()=>borrar(arr_pro)}> quitar</button></p></td>
    </tr>
  ))}
  <tr>
    <td>
      <p style={{position: 'relative', right: '-300px'}} >total:{}</p>
    </td>
  </tr>

  
    
    </table>
  );
};

export default Picker;