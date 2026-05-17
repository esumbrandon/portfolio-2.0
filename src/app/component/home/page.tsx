import Details from './detailsPic';
import Information from './information';
import LineZero from './lineZero';

const Home = () => {
  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      <Information />
      <LineZero />
      <Details />
    </div>
  );
};

export default Home;