import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ToastContainer from './components/common/Toast/ToastContainer';
import PAGE_ROUTES from './constants/pageRoutes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuestionDetailPage from './pages/QuestionDetailPage/QuestionDetailPage';
import NotFound from './pages/NotFound/NotFound';
import MainWrapper from './components/common/Wrapper/MainWrapper';
import { HelmetProvider } from 'react-helmet-async';
import QueryErrorBoundary from './components/error/QueryErrorBoundary';
import AllQuestionPage from './pages/AllQuestionPage/AllQuestionPage';
import PolicyPage from './pages/Policy/PolicyPage';
import LoadingSpinner from './components/common/LoadingSpinner/LoadingSpinner';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
    },
  },
});

export const router = createBrowserRouter(
  [
    {
      path: PAGE_ROUTES.main,
      element: <App />,
    },
    {
      path: `${PAGE_ROUTES.question}/:id`,
      element: <QuestionDetailPage />,
    },
    {
      path: PAGE_ROUTES.all_questions,
      element: <AllQuestionPage />,
    },
    {
      path: PAGE_ROUTES.policy,
      element: <PolicyPage />,
    },
    { path: '*', element: <NotFound /> },
  ],
  {
    basename: PAGE_ROUTES.main,
  },
);

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={client}>
        <QueryErrorBoundary>
          <HelmetProvider>
            <Suspense fallback={<LoadingSpinner />}>
              <MainWrapper>
                <RouterProvider router={router} />
                <ToastContainer />
              </MainWrapper>
            </Suspense>
          </HelmetProvider>
        </QueryErrorBoundary>
      </QueryClientProvider>
    </StrictMode>,
  );
});

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <QueryClientProvider client={client}>
//       <QueryErrorBoundary>
//         <HelmetProvider>
//           <Suspense fallback={<LoadingSpinner />}>
//             <MainWrapper>
//               <RouterProvider router={router} />
//               <ToastContainer />
//             </MainWrapper>
//           </Suspense>
//         </HelmetProvider>
//       </QueryErrorBoundary>
//     </QueryClientProvider>
//   </StrictMode>,
// );
