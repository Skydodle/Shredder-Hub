import styles from "./Product.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function Product(props) {
  const {_id, name, price, feature, photo_url, thumbnail_url, descript_1, descript_2, sizes} = props

  const description =
   descript_1 ? descript_1 :
   descript_2 ? descript_2 :
   "The product description is not yet available. Check out the latest info on this snowboard on the manufacturer's website"

  return (
    <div
        key={_id}
        className={styles.product}
    >
      <Image
        src={thumbnail_url}
        alt={`Image of ${name}`}
        height={740}
        width={640}
      />
      <h3>
      <Link href= {{
        pathname: "/productPage",
        query: {
            id: _id,
            name: name,
            description: description,
            feature: feature,
            size: sizes,
            photo: photo_url,
            price: price,
            thumbnail: thumbnail_url,
        }
      }}
      >
        <a>{name}</a>
      </Link>
      </h3>
        <p><b>Size:</b> { sizes }</p>
        <span>${price}</span>
    <div>
      <button
        className="snipcart-add-item"
        data-item-id={_id}
        data-item-image={thumbnail_url}
        data-item-name={name}
        data-item-price={price}
      >
        Add to Cart
      </button>
    </div>
  </div>
  );
}