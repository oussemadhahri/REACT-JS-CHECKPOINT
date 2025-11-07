import product from '../product';

const Image = () => (
  <img
    className="product-image"
    src={product.image}
    alt={product.name}
    loading="lazy"
  />
);

export default Image;