
function UsuariosList({ usuarios }) {
  return(
    <tbody>
      {usuarios.map(usuario => (
        <tr key={usuario.id}>
        <td>{usuario.id}</td>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.detail}</td>
      </tr>
      ))}
		</tbody>
  )
}

export default UsuariosList