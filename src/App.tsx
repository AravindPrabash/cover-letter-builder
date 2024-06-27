import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import CoverLetterGenerator from './routes/cover-letter-generator';
import Home from './routes/home';
import { URI_LIST } from './app/consts';

const App = () => {
  const router = createBrowserRouter([
    {
      path: URI_LIST.HOME,
      element: <Root />,
      errorElement: <div>Oops</div>,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: URI_LIST.COVER_LETTER_GENERATOR,
          element: <CoverLetterGenerator />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
