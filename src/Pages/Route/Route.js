import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Service from "../Service/Service";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";
import AddService from "../AddService/AddService";
import PrivateRoute from "./PrivateRoute";
import AddReview from "../AddReview/AddReview";
import Review from "../Review/Review";
import DisplayReview from "../DisplayReview/DisplayReview";
import MyReviews from "../MyReviews/MyReviews";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services',
                element: <Service></Service>,
                loader: () => fetch('http://localhost:5000/services')
            },
            // http://localhost:5000/
            {
                path: '/services/:serviceId',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.serviceId}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/addservice',
                element: <PrivateRoute> <AddService></AddService></PrivateRoute>,
            },
            {
                path: '/reviews/:serviceId',
                element: <PrivateRoute><Review></Review></PrivateRoute>,
                // loader: ({ params }) => fetch(`/reviews/${params.serviceId}`)
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.serviceId}`)
            },
            {
                path: '/reviewsDisplay',
                element: <DisplayReview></DisplayReview>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: '/addreview',
                element: <PrivateRoute> <AddReview></AddReview></PrivateRoute>,
            },
            {
                path: '/myReview',
                // element: <PrivateRoute> <MyReviews></MyReviews> </PrivateRoute>
                element: <MyReviews></MyReviews>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "*", element: <ErrorPage></ErrorPage>
            },
        ]
    }
])