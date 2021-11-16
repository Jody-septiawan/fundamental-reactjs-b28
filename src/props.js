import React from 'react';

//Import Components
import List from './components/list';

function Props() {
  const firstCarMerk = 'MBW';
  const firstCarColor = 'pink';
  const firstCarQty = 274;

  return (
    // Code Inside div
    <div>
      <p>On the image element using the default props, namely src</p>
      <img
        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="img"
      />

      <List listData={firstCarMerk} color={firstCarColor} qty={firstCarQty} />
      <List listData="Mercedes-Benz" />
      <List listData="Lamborghini" />
    </div>
  );
}

export default Props;
