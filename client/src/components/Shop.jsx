import shirtImg from '/images/shirt.jpg'
import pantsImg from '/images/pants.jpg'
import skirtImg from '/images/skirt.jpg'
import blazerImg from '/images/blazer.jpg'
import tieImg from '/images/tie.jpg'

function Shop() {
  const products = [
    { name: 'School Shirt', price: '$24.99', image: shirtImg },
    { name: 'Uniform Pants', price: '$29.99', image: pantsImg },
    { name: 'Pleated Skirt', price: '$27.99', image: skirtImg },
    { name: 'School Blazer', price: '$49.99', image: blazerImg },
    { name: 'School Tie', price: '$12.99', image: tieImg },
  ]

  return (
    <section className="shop section" id="shop">
      <div className="container">
        <h2 className="section-title">Shop Uniforms</h2>
        <p className="section-subtitle">
          Browse our collection of high-quality school uniforms available for
          individual purchase. Fast delivery and easy returns.
        </p>
        <div className="shop-grid">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-price">{product.price}</div>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop
