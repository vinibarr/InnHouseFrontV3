
import Login from "./pages/Login";
import Admin from './pages/Admin';
import { useUserContext } from './contexts/UserContext';
import { useMemo, useState } from "react";
import DocumentHelper from "./helpers/DocumentHelper";
import DefaultConstants from "./data/Constants";


const App = () => {
  const { user } = useUserContext();

  const [firstRender, setFirstRender] = useState<boolean>(true);

  if (firstRender) {
    DocumentHelper.setFavIcon(DefaultConstants.system.favIcon);
    DocumentHelper.setTitle(DefaultConstants.system.name);

    setFirstRender(false);
  }

  return useMemo(() => {
    if (user) {
      return <Admin />;
    }
  
    return <Login />;
  }, [user]);
}

export default App;
