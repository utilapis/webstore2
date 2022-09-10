import React from 'react';
import { Table } from 'react-bootstrap';

export function Products() {
  const products = [
    {
      id: 1,
      name: '2 Mancuernas',
      price: 50,
      image: 'images/product-1.jpg',
      stock: 50,
    },
    {
      id: 2,
      name: 'Banco ajustable',
      price: 50,
      image: 'images/product-2.jpg',
      stock: 50,
    },
    {
      id: 3,
      name: 'Kit de pesas con estuche',
      price: 50,
      image: 'images/product-3.jpg',
      stock: 50,
    },
    {
      id: 4,
      name: 'Pesas',
      price: 50,
      image: 'images/product-4.jpg',
      stock: 50,
    },
    {
      id: 5,
      name: 'Pesa de 30Kg',
      price: 50,
      image: 'images/product-5.jpg',
      stock: 50,
    },
    {
      id: 6,
      name: 'Bolsa de boxeo con pie',
      price: 50,
      image: 'images/product-6.jpg',
      stock: 50,
    },
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
