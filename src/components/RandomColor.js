import tinycolor from 'tinycolor2';
import { useState } from 'react';

function ColorResults(props) {
  const { start, gradient, onClick, id } = props;
  const color = tinycolor(start).spin(gradient).toString();

  function hexToRgb(
    hex,
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  ) {
    return result ? result.map((i) => parseInt(i, 16)).slice(1) : null;
  }
  const rgba = hexToRgb(color);
  const rgbaConvert = rgba.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div
      className="color-box"
      onClick={onClick}
      id={id}
      style={{
        width: '100px',
        height: '100px',
        background: color,
        font: '2px',
        padding: '5px',
        display: 'inline-block',
        margin: '5px',
        borderRadius: '5px',
      }}
    >
      <b>RGB:</b> <i> ({rgbaConvert})</i>
    </div>
  );
}

function ColorPalette(props) {
  const { start } = props;
  const colors = [];

  for (let i = -360; i < 360; i++) {
    colors.push(<ColorResults start={start} gradient={i} id={i} />);
  }
  return colors;
}

function ColorPick(props) {
  const [color, setColor] = useState('#ada6b9');

  return (
    <div className="colors">
      <div className="colors-title">
        <h4>Choose Your Hue :</h4>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className="color-results">
        <ColorPalette start={color} />
      </div>
      <div></div>
    </div>
  );
}

export default ColorPick;
