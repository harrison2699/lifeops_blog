import {
  parse
} from "./chunk-22XOHJSC.js";
import "./chunk-DJND7XRA.js";
import "./chunk-ZCF3XGLX.js";
import "./chunk-MXS3PDQJ.js";
import "./chunk-3UE5V7P4.js";
import "./chunk-6CZFCKEV.js";
import "./chunk-MC3AM3W6.js";
import "./chunk-VWZPVBGG.js";
import "./chunk-XFRLPF6K.js";
import "./chunk-QAX76WFI.js";
import "./chunk-N6IVHT5M.js";
import "./chunk-RNOSOWOT.js";
import {
  selectSvgElement
} from "./chunk-4SPKNTEE.js";
import {
  configureSvgSize
} from "./chunk-2IOSLCXT.js";
import {
  __name,
  log
} from "./chunk-PYBXKYUJ.js";
import "./chunk-QSCUV4CX.js";
import "./chunk-T4KQPHTV.js";
import "./chunk-FOQIPI7F.js";

// node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-42DDH7IO.mjs
var parser = {
  parse: __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: "11.14.0" + (true ? "" : "-tiny")
};
var getVersion = __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-42DDH7IO-AJSFOGZV.js.map
