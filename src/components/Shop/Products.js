import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS=[{
  id:"p1",
  title:"How to get girls",
  price:12,
  description:"this is a book by someone who never have a girlfriend"
},
{
  id:"p2",
  title:"How to get a job",
  price:16,
  description:"this is a book by someone who never had a job"
}]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item=>{
           return <ProductItem
           key={item.id}
           id={item.id}
           title={item.title}
           price={item.price}
           description={item.description}
         />
        })}
       
      </ul>
    </section>
  );
};

export default Products;
