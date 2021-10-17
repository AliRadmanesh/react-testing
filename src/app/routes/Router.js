// Define app routes here
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../../features/home';
import Dashboard from '../../features/dashboard';
import Blogs from '../../features/blogs';
import Login from '../../features/login';
import Register from '../../features/register';
import Categories from '../../features/categories';
import Contact from '../../features/contact';
import About from '../../features/about';
import FAQ from '../../features/faq';
import CourseList from '../../features/courses';
import Course from '../../features/course';

function AppRouter() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/me" component={Dashboard} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={CourseList} />
          <Route exact path="/course" component={Course} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
