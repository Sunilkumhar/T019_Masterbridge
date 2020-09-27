import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/Perticular/Perticular_course.css";
import NavP from "./NavP";

import ReactPlayer from "react-player";

function Perticular_course() {
  const [Url, setUrl] = useState("https://www.youtube.com/watch?v=ysz5S6PUM-U");
  const [disable, setdisable] = useState("disabled");

  var tit = [
    { intro: "Intro", link: "https://www.youtube.com/watch?v=pCA4qpQDZD8" },
    { intro: "Intro", link: "https://www.youtube.com/watch?v=ysz5S6PUM-U" },
    {
      intro: "Intro",
      link: "https://www.youtube.com/watch?v=8bNlffXEcC0&ab_channel=DaveCeddia",
    },
    { intro: "Intro", link: "https://www.youtube.com/watch?v=bGkB30iFtz0" },
    { intro: "Intro", link: "https://www.youtube.com/watch?v=60ItHLz5WEA" },
    { intro: "Intro", link: "https://www.youtube.com/watch?v=DVZ6FqKMcgM" },
    { intro: "Intro", link: "https://www.youtube.com/watch?v=pCA4qpQDZD8" },
    { intro: "Intro", link: "https://www.youtube.com/watch?v=pCA4qpQDZD8" },
    { intro: "Intro", link: "https://www.youtube.com/watch?v=4bIQNbHofs0" },
    {
      intro: "Intro",
      link: "https://www.youtube.com/watch?v=8bNlffXEcC0&ab_channel=DaveCeddia",
    },
  ];

  var sum = 1;
  const disabled = false;

  useEffect(() => {
    Showvideo();
    console.log(123);
  }, [Url]);

  const changeVideo = (x) => {
    setUrl(x);
  };
  const Showvideo = () => {
    return (
      <ReactPlayer className="player" url={Url} width="100%" height="100%" />
    );
  };

  return (
    <div className="each_course">
      <NavP />
      <div className="row">
        <div className="col-8 video">
          <div className="wrapper">{Showvideo()}</div>
        </div>
        <div className="col-4 index">
          <h1 style={{ textDecoration: "underline", marginLeft: "10px" }}>
            INDEX
          </h1>

          {tit.map((a) => (
            <div className="title" onClick={() => changeVideo(a.link)}>
              <h1>{sum++}.</h1>
              <p>{a.intro}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="quiz">
        <h1>Here are the Quizes For the above course : </h1>
        <div className="quizes">
          <Link
            to="/course1/quiz"
            style={{ textDecoration: "none" }}
            custom-attribute="disabled"
          >
            <button type="button" class="btn btn-primary">
              Quiz 1
            </button>
          </Link>
          <Link to="/course1/quiz" style={{ textDecoration: "none" }}>
            <button type="button" class="btn btn-primary">
              Quiz 2
            </button>
          </Link>
          <Link to="/course1/quiz" style={{ textDecoration: "none" }}>
            <button type="button" class="btn btn-primary">
              Quiz 3
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Perticular_course;
