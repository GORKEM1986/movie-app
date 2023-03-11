import AuthContext from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AuthContext>
        <AppRouter />
      </AuthContext>
    </div>
  );
}

export default App;
