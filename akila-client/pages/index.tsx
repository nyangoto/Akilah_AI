import { PageRoute } from '../components/SHARED/PageRoute/PageRoute';
import { HomePage } from '../components/HomePage/HomePage';

const Home = () => {
  return (
    <PageRoute header="Ask Akila">
      <HomePage />
    </PageRoute>
  );
};

export default Home;
