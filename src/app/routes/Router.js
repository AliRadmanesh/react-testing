// Define app routes here
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../../features/home';
import Dashboard from '../../common/Layout/dashboard';
import Login from '../../features/login';
import Register from '../../features/register';
import Categories from '../../features/categories';
import Contact from '../../features/contact';
import About from '../../features/about';
import FAQ from '../../features/faq';
import CourseList from '../../features/courses';
import Course from '../../features/course';
import Page404 from '../../features/404/index';
import Search from '../../features/search';
import Compare from '../../features/compare';
import Jobs from '../../features/jobs';
import JobSearch from '../../features/jobs/search';
import Job from '../../features/job';
import Retrieve from '../../features/retrieve';
import Authentication from '../../features/auth';
import NewPassword from '../../features/forget/new-password';
import LoginPassword from '../../features/login/password';
import LoginCode from '../../features/login/code';
import ForgetCode from '../../features/forget/code';
import ForgetPhone from '../../features/forget/phone';
import RegisterCode from '../../features/register/code';
import CompleteInfo from '../../features/register/complete-info';
import Bookmarks from '../../features/dashboard/bookmarks';
import Edit from '../../features/dashboard/edit';
import Favorites from '../../features/dashboard/favorites';
import Notifications from '../../features/dashboard/notifications';
import Purchases from '../../features/dashboard/purchases';
import Transactions from '../../features/dashboard/transactions';
import Wallet from '../../features/dashboard/wallet';
import Main from '../../features/dashboard/main';
import Unauthenticated from '../../features/unauthenticated';

function AppRouter() {
  const { category } = useSelector((state) => state.jobs.search);

  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses/:slug" component={CourseList} />
          <Route exact path="/course/:slug" component={Course} />
          <Route exact path="/unauthenticated" component={Unauthenticated} />
          <Route exact path="/courses" component={Search} />
          <Route exact path="/compare" component={Compare} />
          {/* <Route
            path={['/jobs', '/jobs/:slug', '/jobs/search']}
            component={
              // eslint-disable-next-line no-nested-ternary
              window.location.href.includes('/search')
                ? JobSearch
                : window.location.search === ''
                ? Jobs
                : JobSearch
            }
          /> */}
          {/* <Route exact path="/jobs/search" component={JobSearch} /> */}
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path={['/jobs/search', '/jobs/:slug']} component={JobSearch} />
          <Route exact path="/job/:slug" component={Job} />
          <Route exact path="/auth" component={Authentication} />
          <Route exact path="/login/password" component={LoginPassword} />
          <Route exact path="/login/code" component={LoginCode} />
          {/* <Route exact path="/register/phone" component={() => <h4>register phone</h4>} /> */}
          <Route exact path="/register/code" component={RegisterCode} />
          <Route exact path="/register/complete-info" component={CompleteInfo} />
          {/* <Route exact path="/forget/phone" component={ForgetPhone} /> */}
          <Route exact path="/forget/code" component={ForgetCode} />
          <Route exact path="/forget/new-password" component={NewPassword} />
          <Route exact path="/dashboard" component={Main} />
          <Route exact path="/dashboard/bookmarks" component={Bookmarks} />
          <Route exact path="/dashboard/favorites" component={Favorites} />
          <Route exact path="/dashboard/edit" component={Edit} />
          <Route exact path="/dashboard/notifications" component={Notifications} />
          <Route exact path="/dashboard/purchases" component={Purchases} />
          <Route exact path="/dashboard/transactions" component={Transactions} />
          <Route exact path="/dashboard/wallet" component={Wallet} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
