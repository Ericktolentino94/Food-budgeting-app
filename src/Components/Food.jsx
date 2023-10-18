import React from 'react';

function Food({ food }) {
  return (
    <tr>
      <td>{food.item_name}</td>
      <td>{food.amount}</td>
      <td>{food.date}</td>
      <td>{food.from}</td>
      <td>{food.category}</td>
    </tr>
  );
}

export default Food;
