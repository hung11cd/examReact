import React from 'react'
interface ProductType  {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: {
       id: number;
       name: string;
       image: string;
       creationAt: string;
       updatedAt: string;
    }
   }
const HomeProductWrapperItem = () => {
    let [products, setProducts] = React.useState<[ProductType] | null>(null)
    let [loading, setLoading] =  React.useState(false);
    let [categoryId, setCategoryId] =  React.useState(0);

    React.useEffect(()=>{
        let fetchProduct = async ()=>{
            setLoading(true);
            //let url = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=4' ;
            let url ='https://api.escuelajs.co/api/v1/products?offset=0&limit=4'
            const response = await fetch(url)
            let result = await response.json();

            console.log(result);
            setProducts(result)
            setLoading(false);
        }

        fetchProduct();

    },[]);

  return (
    <>
     {products && products.length > 0 && products.map((item)=> {
        return(
            <div className="product_item">
            <img
            src={item.images[0]}
            alt=""
            />
            <h3>{item.title}</h3>
            <div className="price">
            <strong>{item.price} đ</strong>
            </div>
      </div>
        )
        })}
    </>
  
  )
}

export default HomeProductWrapperItem
