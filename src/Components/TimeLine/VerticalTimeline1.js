import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import infinitesweeps from "./infinitesweepslogo.png";
import reachforthe from "./reachforthe.png";
import vz from "./vz.png";
import { HeaderH1 } from "./TimelineElements";
import Chip from "@mui/material/Chip";

const VerticalTimeline1 = () => {
  return (
    <div id="timeline" style={{ paddingTop: "100px" }}>
      <HeaderH1> TimeLine </HeaderH1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#b38f00", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  #b38f00" }}
          iconStyle={{
            backgroundImage: `url(${reachforthe})`,
            backgroundSize: "cover",
          }}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            President
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Computer Star Foundation
          </h4>
          <h5
            style={{
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            August 2020 - Present
          </h5>
          <p
            style={{
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Conducted numerous camps and events in STEM for youth participants.
            Instrumental in generating new sponsorships and contributing to
            workshops.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "black",
            color: "white",
            textAlign: "center",
          }}
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          iconStyle={{
            backgroundImage: `url(${infinitesweeps})`,
            backgroundSize: "cover",
          }}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Testing Intern
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Infinite Sweeps
          </h4>
          <h5
            style={{
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            June 2021-August 2021
          </h5>
          <p
            style={{
              textAlign: "center",
              alignSelf: "center",
              paddingBottom: "3px",
            }}
          >
            Tested code for errors including frontend and backend using Java and
            Agile Methodology. Executed reports and design implementations for
            the website as well.
          </p>
          <Chip
            label="Java"
            style={{
              backgroundColor: "#b38f00",
            }}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#b38f00",
            color: "white",
            textAlign: "center",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #b38f00" }}
          iconStyle={{
            backgroundImage: `url(${vz})`,
            backgroundSize: "cover",
          }}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Software Engineer Intern
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Verizon
          </h4>
          <h5
            style={{
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            June 2022-August 2022
          </h5>
          <p
            style={{
              textAlign: "center",
              alignSelf: "center",
              paddingBottom: "3px",
            }}
          >
            Work in Progress
          </p>
          <Chip
            label="JavaScript"
            style={{
              color: "white",
              backgroundColor: "#000",
            }}
          />
          <Chip
            label="Mocha/Chai"
            style={{
              color: "white",
              backgroundColor: "#000",
            }}
          />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default VerticalTimeline1;
