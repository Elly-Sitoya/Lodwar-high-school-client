import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Homepage from "./pages/Homepage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import LoginPage from "./pages/LoginPage";
import AdminRegisterPage from "./pages/admin/AdminRegisterPage";
import ChooseUser from "./pages/ChooseUser";
import AdmissionsPage from "./pages/AdmissionsPage";
import AcademicsPage from "./pages/AcademicsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import OnlineAdmissionForm from "./pages/OnlineAdmissionForm";
import GalleryPage from "./pages/GalleryPage";
import Navbar from "./components/Navbar";
import TendersPage from "./pages/TendersPage";
import Footer from "./components/Footer/Footer";
import ChapelPage from "./pages/ChapelPage";
import RolePlaceHolder from "./pages/RolePlaceHolder";
import FeeStructure from "./pages/FeeStructure";
const App = () => {
  const { currentRole } = useSelector((state) => state.user);

  return (
    <Router>
      {currentRole === null && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/fee-structure" element={<FeeStructure />} />
            <Route
              path="/onlineadmissionform"
              element={<OnlineAdmissionForm />}
            />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/tenders" element={<TendersPage />} />
            <Route path="/chapel" element={<ChapelPage />} />
            {/* <Route path="/footer" element={<Footer />} /> */}
            <Route path="/choose" element={<ChooseUser visitor="normal" />} />
            <Route
              path="/chooseasguest"
              element={<ChooseUser visitor="guest" />}
            />

            <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
            <Route
              path="/Studentlogin"
              element={<LoginPage role="Student" />}
            />
            <Route
              path="/Teacherlogin"
              element={<LoginPage role="Teacher" />}
            />

            <Route path="/Adminregister" element={<AdminRegisterPage />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </>
      )}
      {currentRole === "Admin" && (
        <>
          {/* <AdminDashboard /> */}
          <RolePlaceHolder />
        </>
      )}
      {currentRole === "Student" && (
        <>
          {/* <StudentDashboard /> */}
          <RolePlaceHolder />
        </>
      )}
      {currentRole === "Teacher" && (
        <>
          {/* <TeacherDashboard /> */}
          <RolePlaceHolder />
        </>
      )}
    </Router>
  );
};

export default App;
