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
    <aside style={{ width: "250px" }} className="bg-blue-mid height-100 absolute top left"></aside>
    <main style={{ paddingLeft: "250px" }} className="width-100 height-100">
      <div className="padding-xlarge">
        <Typography />
        <Fx />
        <Elements />
        <Icons config={window.styles.icons} list={window.styles.iconList} />
        <Forms config={window.styles.forms} />
        <Layout />
      </div>
    </main>
  </div>,
  document.getElementById("style-guide"),
);
