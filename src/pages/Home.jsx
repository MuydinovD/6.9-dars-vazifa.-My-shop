//import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFache } from "../components/Featch";
//import axiosInstance from "../utils/axious";

// export const loader = async () => {
//   const req = await axiosInstance.get("/products");
//   const products = req.data.products;
//   return { products };
// };

function Home() {
  // const { products } = useLoaderData();
  // console.log(products);
  const url = "https://dummyjson.com/products";
  const { data, loading, error } = useFache(url);
  const addItem = (e) => {
    e.preventDefault();
  };

  return (
    <div className="continer w-full mx-auto p-10  mt-10 ">
      <h1 className="text-center from-neutral-400 mb-10 text-3xl">
        Product List
      </h1>
      <div className="">
        {data ? (
          <div>
            <ul className="grid grid-clos-2 md:grid-cols-3 gap-5">
              {data.products?.map((product) => {
                return (
                  <Link
                    to={`/singleproducts/${product.id}`}
                    key={product.id}
                    className="card bg-base-100 shadow-xl"
                  >
                    <figure>
                      <img src={product.thumbnail} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{product.title}</h2>
                      <p>${product.price}</p>
                      <div className="card-actions justify-end">
                        <button onClick={addItem} className="btn btn-primary">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}

export default Home;
