import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Image from "next/image";
import styles from "../styles/productPage.module.css";



export async function getServerSideProps(context) {
  const cq = context.query;

  //you can make DB queries using the data in context.query
  return {
      props: {
         id: cq.id, //pass it to the page props
         name: cq.name,
         description: cq.description,
         feature: cq.feature,
         size: cq.size,
         photo: cq.photo,
         price: cq.price,
         thumbnail: cq.thumbnail
      }
  }
}

export default function productPage(props) {
  const { id, name, description, feature, size, photo, price, thumbnail} = props;

  const sizeArray = size? size.split(', '): null;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      {/* <h1>Shredder Hub</h1> */}


      <div
        className={styles.Row}
      >
        <h3>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h3>
        <Image
          src={photo}
          alt={`Image of ${name}`}
          height={740}
          width={640}
          className={styles.Column}
          />
        <div
          className={styles.Column}
        >
          <div>
            <h2>{name}</h2>
            <span>${price}</span>
          </div>
          <div>
            <h3>Description</h3>
            <p> {description}</p>
          </div>
          <div>
            <h3>Feature</h3>
            <p>{feature}</p>
          </div>
          <div>
            <h3>Size</h3>
            <p>{size}</p>
          </div>
          <div>
            <button
              className="snipcart-add-item"
              data-item-id={id}
              data-item-image={thumbnail}
              data-item-name={name}
              data-item-price={price}
            >
              Add to Cart
            </button>
          </div>
        </div>
     </div>
    </>
  );
}