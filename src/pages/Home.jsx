import Carousel from '../components/Carousel';
import ProductsDesktop from '../components/ProductsDesktop';
import Description from '../components/Description';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';

const URL =
  'https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js';

const Home = () => {
  const { data, loading, error } = useFetch(URL);

  if (loading) return <Loading loading={loading} />;

  if (error) console.error(error);
  return (
    <div className="container">
      <Carousel images={data?.images} />
      <ProductsDesktop images={data?.images} />
      <Description data={data} /> 
    </div>
  );
}

export default Home;
