import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./views/LoginPage.jsx";
import RegisterPage from "./views/RegisterPage.jsx";
import NavBar from "./components/NavBar.jsx";
import FormAdd from "./components/FormAdd.jsx";
import FormAddCat from "./components/FormAddCat.jsx";
import DashboardPage from "./views/DashboardPage";
import CategoriesPage from "./views/CategoriesPage";
import FormEdit from "./components/FormEdit";
import { Route, Routes } from "react-router-dom";
import { RequireAuth, RequireNoAuth } from "./components/RequireAuth.jsx";

function App() {
    return (
        <div className="App">
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
                crossOrigin="anonymous"
            />
            <Routes>
                <Route
                    path="/login"
                    element={
                        <RequireNoAuth>
                            <LoginPage />
                        </RequireNoAuth>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <RequireNoAuth>
                            <RegisterPage />
                        </RequireNoAuth>
                    }
                />

                <Route
                    path="/menus/edit/:id"
                    element={
                        <RequireAuth>
                            <FormEdit />
                        </RequireAuth>
                    }
                />

                <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <DashboardPage />
                        </RequireAuth>
                    }
                />

                <Route
                    path="/addform"
                    element={
                        <RequireAuth>
                            <FormAdd />
                        </RequireAuth>
                    }
                />

                <Route
                    path="/addformcat"
                    element={
                        <RequireAuth>
                            <FormAddCat />
                        </RequireAuth>
                    }
                />

                <Route
                    path="/categories"
                    element={
                        <RequireAuth>
                            <CategoriesPage />
                        </RequireAuth>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
