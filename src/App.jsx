import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import ServicePage from "./Pages/Servicepage";
import AnmeldungPages from "./Pages/AnmeldungPages";
import RegisterPages from "./Pages/RegisterPages";
import JobsPage, { jobloader } from "./Pages/JobsPage";
import AddJobPage from "./Pages/AddJobPage";
import ChatPage from "./Pages/ChatPage";
import EditservicesPage from "./Pages/EditservicesPage";
import BookingsPage from "./Pages/BookingsPage"; // Import the BookingsPage component

const updateJob = (updatedJob) => {
  console.log("Job updated:", updatedJob);
  // Update job logic (API call or state update)
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout />}
      errorElement={<h1>Oops! Something went wrong.</h1>}
    >
      <Route index element={<Homepage />} />
      <Route path="/Serviceslink" element={<ServicePage />} />
      <Route path="/add-job" element={<AddJobPage />} />
      <Route path="/login" element={<AnmeldungPages />} />
      <Route path="/Register" element={<RegisterPages />} />
      <Route path="/Serviceslink/:id" element={<JobsPage />} loader={jobloader} />
      <Route
        path="/edit-job/:id"
        element={<EditservicesPage updateservicesSubmit={updateJob} />}
        loader={jobloader}
      />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/bookings" element={<BookingsPage />} />

    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
};

export default App;
