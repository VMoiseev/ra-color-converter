import React, { useState } from 'react';

function ColorConverter() {
  const [hexColor, setHexColor] = useState('');
  const [rgbColor, setRgbColor] = useState('');

  const onChangeHandle = (e) => {
    let value = e.target.value;
    const hexRegex = /^[#]([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    if (value.length === 7) {
      if (hexRegex.test(value)) {
        setHexColor(value);

        let r = [];
        let g = [];
        let b = [];

        r.push(parseInt(value.slice(1, 3), 16));
        g.push(parseInt(value.slice(3, 5), 16));
        b.push(parseInt(value.slice(5), 16));

        setRgbColor('rgb(' + r + ', ' + g + ', ' + b + ')');

      } else {
        setRgbColor('Ошибка');
        setHexColor('#ff0000');
      }
    }
  }

  return (
    <div className="colorConverter-box" style={{ backgroundColor: hexColor }}>
      <input className="hex-input" name="color-input" onChange={onChangeHandle} />
      <input className="rgb-input" disabled name="rgb-input" value={rgbColor} />
    </div>
  )
}

export default ColorConverter;
