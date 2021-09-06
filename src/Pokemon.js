import React from 'react';

const Pokemon = (props) => {
  console.log(props);
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  return <div>{`This is a Pokemon page for Pokemon #${pokemonId}`}</div>;
};

export default Pokemon;
