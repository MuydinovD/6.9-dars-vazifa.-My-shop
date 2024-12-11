import { useFache } from "../components/Featch";
import { useParams } from "react-router-dom";

function SinglePage() {
  const { id } = useParams();
  const url = "https://dummyjson.com/products";
  const { data, loading, error } = useFache(url);

  if (!data || !data.products) {
    return <p>Loading...</p>;
  }

  const prod = data.products.find((item) => item.id === Number(id));

  if (!prod) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-5">
          <div className="mb-5">
            <img
              src="https://i.imgur.com/qIufhof.png"
              alt="404 Not Found"
              className="w-64"
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-5">
            The page you’re looking for doesn’t exist. It might have been
            removed or the URL might be incorrect.
          </p>

          <div className="flex gap-5">
            <Link
              to="/"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
            >
              Go to Home
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="continer mx-auto mt-36 ml-10">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="max-w-28">
          <img src={prod.thumbnail} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{prod.title}</h2>
          <p>{prod.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
