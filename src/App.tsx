import { Route, Redirect, Switch } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./views/Home"));
const FAQ = lazy(() => import("./views/FAQ"));
const Rules = lazy(() => import("./views/Rules"));
const PageNotFound = lazy(() => import("./views/PageNotFound"));

function App() {
    return (
        <Suspense fallback={<Loader />}>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/faqs" render={() => <FAQ />} />
                <Route exact path="/rules" render={() => <Rules />} />
                <Route path="*" render={() => <PageNotFound />} />
            </Switch>
            <Footer />
        </Suspense>
    );
}

export default App;
