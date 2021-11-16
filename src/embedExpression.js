import React from 'react';

function EmbedExpression() {
  function getMajor() {
    return 'Full-Stack';
  }

  const companyName = <b>Dumbways.id</b>;

  return (
    <div>
      <p>
        Welcome To {companyName} Class <h1>{getMajor()}</h1>
      </p>
    </div>
  );
}

export default EmbedExpression;
