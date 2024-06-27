import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import CoverLetterGenerator from './routes/cover-letter-generator';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <div>Oops</div>,
      children: [
        {
          path: '',
          element: <CoverLetterGenerator />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
