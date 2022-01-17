import React from "react";
import { resumeData } from '../../portfolio'

import VerticalTab from "./VerticalTab";

export default function App() {
  return (
    <div className="tab">
      <VerticalTab data={resumeData.jobs} />
    </div>
  );
}