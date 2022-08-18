import PropTypes from "prop-types";

function createProductLIs(productsData) {
  return productsData.map((product) => (
    <li>
      {product.name} - {product.price}
    </li>
  ));
}

export default function Products({ products }) {
  return <ul>{createProductLIs(products)}</ul>;
}

Products.propTypes = {
  listItems: PropTypes.shape.isRequired,
};
