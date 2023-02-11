import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Login from "./components/login.jsx";
import SignUp from "./components/signUp.jsx";
import Skills from "./components/skills.jsx";
import StepForm from "./components/stepForm.jsx";
import SkillForm from "./components/skillForm.jsx";
import EditPage from "./components/editPage.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Skills />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/skillForm",
    element: <SkillForm />,
  },
  {
    path: "/skillForm/:id",
    element: <SkillForm />,
  },
  {
    path: "/stepForm",
    element: <StepForm />,
  },
  {
    path: "/editPage",
    element: <EditPage />,
  },
  {
    path: "/public",
    element: <Skills />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("app")
);
