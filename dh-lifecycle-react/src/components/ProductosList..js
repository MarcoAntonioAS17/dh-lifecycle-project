
function ProductosList({ productos }) {
  return(
    <tbody>
      {productos.map(producto => (
        <tr key={producto.id}>
        <td>{producto.id}</td>
        <td>{producto.name}</td>
        <td>{producto.detail}</td>
        <td>{producto.description}</td>
      </tr>
      ))}
		</tbody>
  )
}

export default ProductosList;