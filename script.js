const app = new PIXI.Application({
  view: document.getElementById("root"),
  width: window.innerWidth,
  height: window.innerHeight,
  autoDensity: true,
  resolution: window.devicePixelRatio,
  backgroundColor: 0x000000,
});

const text = new PIXI.Text("Hover", {
  fontSize: 92,
  fontWeight: "700",
  fill: 0xffffff,
});
text.x = app.screen.width / 2 - text.width / 2;
text.y = app.screen.height / 2 - text.height / 2;
text.interactive = true;
text.buttonMode = true;
app.stage.addChild(text);

app.view.onmouseover = () => console.log("over");

// uncomment to fix
// app.renderer.plugins.interaction.onPointerOver(
//   new MouseEvent("mouseover")
// );
