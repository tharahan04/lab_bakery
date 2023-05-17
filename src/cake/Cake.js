const Cake = ({cake}) => {

  return (
    <>
      <h2>This is {cake.cakeName} </h2>
      <p>Ingredients:</p>
      <ul>
          {cake.ingredients.map((ingredient, index) => (
            <li id={index}>{ingredient}</li>))}
        </ul>
      <p>Price:{cake.price}</p>
      <p>Rating:{cake.rating}</p>
    </>
  );
};

export default Cake;