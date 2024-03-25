import { createBrowserRouter } from "react-router-dom";
import App from './components/App.tsx'

export const router = createBrowserRouter([
	{
		path: "/",
		Component: App
	}
]);
