import React, { useState } from "react";
import {Row, Col} from "reactstrap";

import VTlist from "./VTlist";
import VTcontent from "./VTcontent";
import './VerticalTab.css';

function Work(props) {

  const [activeTabId, setActiveTabId] = useState(0);

  function btnClick(id) {
    setActiveTabId(id);
  }


  return (
    <div className="sectionDiv section__Jobs" id="Work">
      <div className="section__Jobs-container">
        <Row>
          <Col>
            <h3 className="sectionHeader">{props.data.sectionHeader}</h3>
          </Col>
        </Row>
        <Row className="section__Jobs-VerticalTabRow">
          <Col sm="3">
            <div className="section__Jobs-styledTab">
              <ul className="section__Jobs-styledTabList">
                {props.data.map((job, index) => (
                  <VTlist
                    key={index}
                    onClick={btnClick}
                    data={job}
                    index={index}
                    activeTabId={activeTabId}
                  />
                ))}
              </ul>
              <span className={
                activeTabId === 0 ? "index1-chosen" : activeTabId === 1? "index2-chosen" : "index3-chosen"
                }>
                &nbsp;
              </span>
            </div>
          </Col>
          <Col sm="9">
          {props.data.map((job, index) => (
            <VTcontent
              data={job}
              key={index}
              index={index}
              activeTabId={activeTabId}
            />
          ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Work;
