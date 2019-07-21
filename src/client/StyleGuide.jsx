import React from "react";
import { render } from "react-dom";
import Typography from "./routes/Typography";
import Fx from "./routes/Fx";

render(
  <main className="padding-xlarge">
    <Typography />
    <Fx />
    {/* <Layout />
    <Elements />
    <Icons /> */}
  </main>,
  document.getElementById("style-guide"),
);
