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
sumarValor(total)
}

  const sumarValor = (valor) => {
    var totin = 0
var tot = valor + totin
totin=tot
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
      <p style={{position: 'relative', right: '-300px'}} ></p>
    </td>
  </tr>

  
    
    </table>
  );
};

export default Picker;