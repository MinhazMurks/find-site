import HomePage from './containers/HomePage';
import AboutPage from "./containers/AboutPage";
import SignUpPage from "./containers/SignUpPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FAQPage from "./containers/FAQPage";

export default function App(): React.ReactElement {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/faq" component={FAQPage} />
            </Switch>
        </Router>
    );
}