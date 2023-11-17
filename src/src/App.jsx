import React, { Suspense } from 'react';
import './App.css';
import { Route, Switch } from 'wouter';
import StorePage from './pages/section';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import ScrollToTop from './components/ScrollToTop'
import CartPage from './pages/cart';
import ProductDetailPage from './pages/Detail';
import InfoPage from './pages/info';
import ArticlesBySection from './pages/master/articlesBySection';


const MasterPage = React.lazy(() => import('./pages/master/index'))
const ArticlesPage = React.lazy(() => import('./pages/master/articles'))
const OthersPage = React.lazy(() => import('./pages/master/others'))
const LoginPage = React.lazy(() => import('./pages/master/login'))
const DetailPage = React.lazy(() => import('./pages/master/detail'))
const UsersPage = React.lazy(() => import('./pages/master/users'))



function App() {

  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <Switch>
        <Route
          path="/"
          component={HomePage}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
        <Route
          path="/section/:id"
          component={StorePage}
        />
        <Route
          path="/search/:id"
          component={SearchPage}
        />
        <Route
          path="/article/:id"
          component={ProductDetailPage}
        />
        <Route
          path="/cart"
          component={CartPage}
        />
        <Route
          path="/master"
          component={MasterPage}
        />
        <Route
          path="/master/articles"
          component={ArticlesPage}
        />
        <Route
          path="/master/section/:id"
          component={ArticlesBySection}
        />
        <Route
          path="/master/users"
          component={UsersPage}
        />
        <Route
          path="/master/others"
          component={OthersPage}
        />
        <Route
          path="/master/login"
          component={LoginPage}
        />
        <Route
          path="/master/detail"
          component={DetailPage}
        />
      </Switch>
    </Suspense>

  );
}

export default App;
