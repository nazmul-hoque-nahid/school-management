import React from "react";
import Title from "./components/Title"
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";

{/* About Us Subpages */}
import Overview from "./pages/Overview";
import History from "./pages/History";
import WhyStudyAt from "./pages/WhyStudyAt";
import VisionAndMission from "./pages/VisionAndMission";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import CollegeFactsAndActs from "./pages/CollegeFactsAndActs";
import Location from "./pages/Location";

 {/*Academic Subpages */}
import Calendar from "./pages/Calendar";
import Syllabus from "./pages/Syllabus";
import Textbook from "./pages/TextBook";
import Classteacher from "./pages/ClassTeacherList";
import ClassRoutine from "./pages/ClassRoutine";
import ExamRoutine from "./pages/ExamRoutine";
import Results from "./pages/Results";

{/* Administration Subpages */}
import GoverningBody from "./pages/GoverningBody";
import MessageofChairman from "./pages/Chairman";
import MessageofPrinciple from "./pages/Principle";
import TeacherInformation from "./pages/TeacherInformation";
import StaffInformation from "./pages/StaffInformation";

{/* Admission Subpages */}
import OnlineAdmission from "./pages/OnlineAdmission";
import Circular from "./pages/Circular";
import Prospectus from "./pages/Prospectus";
import AdmissionResult from "./pages/AdmissionResult";
import WaitingList from "./pages/WaitingList";
import FeesChart from "./pages/FeesChart";

import Epayment from "./pages/Epayment";
import NoticeBoard from "./pages/NoticeBoard";

import CoCurricular from "./pages/CoCurricular";
import ClubAndSociety from "./pages/ClubAndSociety";
import Magazine from "./pages/Magazine";
import Gallery from "./pages/Gallery";
import Library from "./pages/Library";

import Login from "./pages/Login";

function App() {
  return (
    <>
      <Title/>
      <Navbar />

      <div className="pt-70">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About Us Subpages */}
          <Route path="/overview" element={<Overview />} />
          <Route path="/history" element={<History />} />
          <Route path="/whystudyat" element={<WhyStudyAt />} />
          <Route path="/visionandmission" element={<VisionAndMission />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collegefactsandacts" element={<CollegeFactsAndActs />} />
          <Route path="/location" element={<Location />} />

          {/*Academic Subpages */}
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/textbook" element={<Textbook />} />
          <Route path="/classteacher" element={<Classteacher />} />
          <Route path="/classroutine" element={<ClassRoutine />} />
          <Route path="/examroutine" element={<ExamRoutine />} />
          <Route path="/results" element={<Results />} />

          {/* Administration Subpages */}
          <Route path="/governingbody" element={<GoverningBody />} />
          <Route path="/messageofchairman" element={<MessageofChairman />} />
          <Route path="/messageofprinciple" element={<MessageofPrinciple />} />
          <Route path="/teacherinformation" element={<TeacherInformation />} />
          <Route path="/staffinformation" element={<StaffInformation />} />
          
          {/* Admission Subpages */}
          <Route path="/onlineadmission" element={<OnlineAdmission />} />
          <Route path="/circular" element={<Circular />} />
          <Route path="/prospectus" element={<Prospectus />} />
          <Route path="/admissionresult" element={<AdmissionResult />} />
          <Route path="/waitinglist" element={<WaitingList />} />
          <Route path="/feeschart" element={<FeesChart />} />

          <Route path="/epayment" element={<Epayment />} />
          <Route path="/notice-board" element={<NoticeBoard />} />

          {/* Campus Life Subpages */}
          <Route path="/cocurricular" element={<CoCurricular />} />
          <Route path="/clubandsociety" element={<ClubAndSociety />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/library" element={<Library />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
