
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddCoffee from '../Components/AddCoffee';
import UpdateCoffee from '../Components/UpdateCoffee';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import Users from '../Components/Users';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        loader: ()=> fetch('https://coffee-store-server-side-3sr79axfy-ahmed-hossains-projects.vercel.app/coffee'),
    },
    {
        path:  '/addCoffee',
        element:<AddCoffee></AddCoffee>
    },
    {
        path:'/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) =>fetch(`https://coffee-store-server-side-3sr79axfy-ahmed-hossains-projects.vercel.app/coffee/${params.id}`)
    },
    {
        path: 'signin',
        element: <SignIn></SignIn>
    },
    {
        path: 'signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-side-3sr79axfy-ahmed-hossains-projects.vercel.app/user')
    }

])

export default Routes;