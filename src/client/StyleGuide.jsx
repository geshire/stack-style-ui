import React from "react";
import { render } from "react-dom";
import Typography from "./routes/Typography";
import Fx from "./routes/Fx";
import Elements from "./routes/Elements";
import Icons from "./routes/Icons";
import Forms from "./routes/Forms";
import Layout from "./routes/Layout";
import Utils from "./routes/Utils";

render(
  <div className="relative">
    <aside style={{ width: "250px" }} className="bg-blue-mid height-100 fixed top left">
      <h1 className="margin-right-xlarge margin-left-large margin-vert-large">
        <img style={{ width: "80%" }} src={`/${window.config.logo}`} />
      </h1>
      <nav className="margin-vert-large margin-left-large">
        <ul className="list-no-style">
          <li className="padding-bottom-small"><a className="text-1 weight-semi color-white hover-no-underline" href="#typography">Typography</a></li>
          <li className="padding-bottom-small"><a className="text-1 weight-semi color-white hover-no-underline" href="#layout">Layout</a></li>
          <li className="padding-bottom-small"><a className="text-1 weight-semi color-white hover-no-underline" href="#fx">FX</a></li>
          <li className="padding-bottom-small"><a className="text-1 weight-semi color-white hover-no-underline" href="#elements">Elements</a></li>
          <li className="padding-bottom-small"><a className="text-1 weight-semi color-white hover-no-underline" href="#forms">Forms</a></li>
          <li className="padding-bottom-small"><a className="text-1 weight-semi color-white hover-no-underline" href="#icons">Icons</a></li>
          <li className="padding-bottom-small"><a className="text-1 weight-semi color-white hover-no-underline" href="#utils">Utils</a></li>
        </ul>
      </nav>
    </aside>
    <main style={{ paddingLeft: "250px" }} className="width-100 height-100 border-box">
      <div className="padding-xlarge">
        <Typography />
        <Layout config={window.styles.layout} />
        <Fx config={window.styles.fx} />
        <Elements />
        <Forms config={window.styles.forms} />
        <Icons config={window.styles.icons} list={window.styles.iconList} />
        <Utils />
      </div>
    </main>
  </div>,
  document.getElementById("style-guide"),
);
