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

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://eclectronics-doctor-review.vercel.app/services')
            },
            {
                path: '/services',
                element: <Service></Service>,
                loader: () => fetch('https://eclectronics-doctor-review.vercel.app/services')
            },
            {
                path: '/services/:serviceId',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://eclectronics-doctor-review.vercel.app/services/${params.serviceId}`)
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
                path: '/reviews',
                element: <PrivateRoute><Review></Review></PrivateRoute>,
            },
            {
                path: '/addreview',
                element: <PrivateRoute> <AddReview></AddReview></PrivateRoute>,
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