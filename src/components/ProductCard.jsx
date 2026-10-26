import React from "react";

function ProductCard({
  name,
  image,
  price,
  originalPrice,
  discount,
  rating,
  delivery,
  seller,
  badge,
  badgeType,
  url,
}) {
  return (
    <div className={`product-card ${badgeType ? `card-${badgeType}` : ""}`}>
      <div className="product-image">
        {badge && (
          <span className={`product-badge-tag badge-${badgeType || "default"}`}>
            {badge}
          </span>
        )}
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="product-info">
        <h3 title={name}>
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="product-title-link"
              title={name}
            >
              {name}
            </a>
          ) : (
            name
          )}
        </h3>
        <div className="product-price-row">
          <p className="product-price">{price}</p>
          {originalPrice && (
            <span className="product-original-price">{originalPrice}</span>
          )}
          {discount && (
            <span className="product-discount-pill">{discount}</span>
          )}
        </div>
        <p className="product-seller">Seller: {seller}</p>
      </div>
      <div className="product-details">
        <p className="product-rating">
          <span className="star-icon">★</span> {rating}
        </p>
        <p className="product-delivery">Delivery: {delivery}</p>
      </div>
    </div>
  );
}

export default ProductCard;