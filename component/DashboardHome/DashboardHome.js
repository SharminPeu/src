import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Review from "../Review/Review";




const DashboardHome = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className='text-center'>
            <Link to={`${url}/review`}>Review</Link>

            <Switch>
        
          <Route path="/topics">
            <Review></Review>
          </Route>
        </Switch>
            
        </div>
    );
};

export default DashboardHome;