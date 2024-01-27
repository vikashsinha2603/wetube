import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";
import SearchPage from './components/SearchPage';
import ExploreTopic from './components/ExploreTopics';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children : [
      {
        path : "/",
      element : <MainContainer />
      },
      {
        path : "/watch",
        element : <WatchPage/>
      },
      {
        path: "/results",
        element: <SearchPage />
      },
      {
        path: "/explore/:category",
        element: <ExploreTopic />
      }

    
    ],
  },
]);

function App() {
  return (
    <Provider store={store} >
    <div className="">
      {/* <Head /> */}
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
