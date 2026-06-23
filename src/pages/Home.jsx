import Hero from '../components/Hero';
import MetricStrip from '../components/MetricStrip';
import ProductShelf from '../components/ProductShelf';
import StoryBand from '../components/StoryBand';

export default function Home({ brand, setPage }) {
  return (
    <>
      <Hero brand={brand} setPage={setPage} />
      <MetricStrip brand={brand} />
      <ProductShelf brand={brand} setPage={setPage} />
      <StoryBand brand={brand} />
    </>
  );
}
