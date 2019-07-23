import React from "react";
import { render } from "react-dom";
import Typography from "./routes/Typography";
import Fx from "./routes/Fx";
import Elements from "./routes/Elements";
import Icons from "./routes/Icons";
import Forms from "./routes/Forms";
import Layout from "./routes/Layout";

render(
  <div className="relative">
    <aside style={{ width: "250px" }} className="bg-blue-mid height-100 absolute top left">
      <h1 className="margin-right-xlarge margin-left-medium margin-vert-large">
        <img style={{ width: "100%" }} src={`/${window.config.logo}`} />
      </h1>
    </aside>
    <main style={{ paddingLeft: "250px" }} className="width-100 height-100">
      <div className="padding-xlarge">
        <Typography />
        <Fx config={window.styles.fx} />
        <Elements />
        <Icons config={window.styles.icons} list={window.styles.iconList} />
        <Forms config={window.styles.forms} />
        <Layout config={window.styles.layout} />
      </div>
    </main>
  </div>,
  document.getElementById("style-guide"),
);
