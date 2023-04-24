import React from 'react';
import { Button, Table } from 'react-bootstrap';

export function Products() {
  const [products, setProducts] = React.useState([] as any[]);
  const newId = React.useRef<HTMLInputElement>(null);
  const newName = React.useRef<HTMLInputElement>(null);
  const newPrice = React.useRef<HTMLInputElement>(null);
  const newStock = React.useRef<HTMLInputElement>(null);

  function loadProducts() {
    fetch('http://localhost:3001/api/products')
    .then((response) => response.json())
    .then((data) => setProducts(data));
  }

  React.useEffect(() => {
    loadProducts();
  }, []);

  function deleteProduct(id: number) {
    fetch(`http://localhost:3001/api/products/${id}`, {
      method: 'DELETE',
    }).then(() => {
      loadProducts();
    });
  }

  function addProduct() {
    fetch('http://localhost:3001/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: +(newId.current?.value || 0),
        name: newName.current?.value,
        price: +(newPrice.current?.value || 0),
        stock: +(newStock.current?.value || 0),
      }),
    }).then(() => { 
      loadProducts();
    });
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Eliminar/Agregar</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td><Button variant="danger" onClick={() => deleteProduct(product.id)}>Eliminar</Button></td>
          </tr>
        ))}
        <tr key={0}>
          <td><input className="form-control" type="number" id="new-id" ref={newId}/></td>
          <td><input className="form-control" type="text" id="new-name" ref={newName}/></td>
          <td><input className="form-control" type="number" id="new-price" ref={newPrice}/></td>
          <td><input className="form-control" type="number" id="new-stock" ref={newStock}/></td>
          <td><Button variant="success" onClick={() => addProduct()}>Agregar</Button></td>
        </tr>
      </tbody>
    </Table>
  );
}
