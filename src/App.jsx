import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext.";
import { TaskProvider } from "./context/TaskContext";
import TaskPage from "./pages/TaskPage";
import TaskFormPage from "./pages/TaskFormPage";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";

import ProtectedRoute from "./ProtectedRoute";
import { StatusProvider } from "./context/StatusContext";
import CategoriesPage from "./pages/CategoriesPage";
import MyTaskPage from "./pages/MyTaskPage";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <StatusProvider>
          <BrowserRouter>
            <header>
              <Navbar />
            </header>
            <main>
              <Sidebar />
              <section className="flex-1 flex justify-center">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />

                  <Route element={<ProtectedRoute />}>
                    <Route path="/tasks" element={<TaskPage />} />
                    <Route path="/add-task" element={<TaskFormPage />} />
                    <Route path="/tasks/:id" element={<TaskFormPage />} />
                    <Route path="/mytasks" element={<MyTaskPage/>}/>

                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/categories" element={<CategoriesPage/>}/>
                  </Route>
                </Routes>
              </section>
            </main>
          </BrowserRouter>
        </StatusProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
