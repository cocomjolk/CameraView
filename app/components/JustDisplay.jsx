import React from 'react';

let cameras = [
                { model: 'XL 2000',
                src:'http://vignette2.wikia.nocookie.net/pawnstarsthegame/images/6/6c/U.S.S._Wisconsin_Video_Camera.png/revision/latest?cb=20111222134545'
              },
              { model: 'Polaroid',
              src:'http://individual.icons-land.com/IconsPreview/Hardware/PNG/256x256/PhotoCamera_Retro.png'
              }
              ]
// const JustDisplay = React.createClass({
class JustDisplay extends React.Component{

  render() {
    let camera = cameras[1];

    return(
    <div>
      <h1>{camera.key}</h1>
      <img src={camera.src} />

    </div>
    );
  }
}
// });

export default JustDisplay;
