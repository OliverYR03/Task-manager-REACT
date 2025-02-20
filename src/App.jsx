import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext.";
import { TaskProvider } from "./context/TaskContext";
import TaskPage from "./pages/TaskPage";
import TaskFormPage from "./pages/TaskFormPage";
import Sidebar from "./components/Sidebar";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";

import ProtectedRoute from "./ProtectedRoute";
import CategoriesPage from "./pages/CategoriesPage";
import MyTaskPage from "./pages/MyTaskPage";
import VitalTaskPage from "./pages/VitalTaskPage";
import TaskInfoPage from "./pages/TaskInfoPage";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
          <BrowserRouter>
            <header>
              <Navbar />
            </header>
            <main>
              <Sidebar />
              <section className="flex-1 flex justify-center">
                <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />

                  <Route element={<ProtectedRoute />}>
                    <Route path="/tasks" element={<TaskPage />} />
                    <Route path="/add-task" element={<TaskFormPage />} />
                    <Route path="/tasks/:id" element={<TaskInfoPage />} />

                    <Route path="/mytasks" element={<MyTaskPage/>}/>
                    <Route path="/vital-tasks" element={<VitalTaskPage />}/>

                    <Route path="/profile/:id" element={<ProfilePage />} />
                    <Route path="/categories" element={<CategoriesPage/>}/>
                  </Route>
                </Routes>
              </section>
            </main>
          </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
