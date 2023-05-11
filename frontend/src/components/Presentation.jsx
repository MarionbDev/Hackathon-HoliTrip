import React from "react";

export default function Presentation() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-1 grid-flow-row grid-">
        <div className="p-5 text-center  row-start-1 row-end-2">
          <h1 className="text-3xl"> NOM DU SITE</h1>
        </div>
        <div className="text-center row-start-2 row-end-3">
          <h2>citation</h2>
        </div>
        <div className="p-5 pl-0 text-left col-start-2 col-end-4 row-start-1 row-end-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nulla tellus, porttitor in rhoncus non, laoreet at risus. Aenean nec
          ex finibus, ullamcorper lorem at, hendrerit tellus. Nullam sem enim,
          ullamcorper tempor odio non, aliquet imperdiet nisi. Sed eget urna sit
          amet elit sollicitudin fringilla. Nulla bibendum vel lorem at mattis.
          Sed vitae ultricies nulla. Pellentesque dignissim lacus in libero
          bibendum egestas.
        </div>
      </div>
    </div>
  );
}
