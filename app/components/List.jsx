import React from 'react';

let cameras = [
                { model: 'XL 2000',
                src:'http://vignette2.wikia.nocookie.net/pawnstarsthegame/images/6/6c/U.S.S._Wisconsin_Video_Camera.png/revision/latest?cb=20111222134545'
              },
              { model: 'Polaroid',
              src:'http://individual.icons-land.com/IconsPreview/Hardware/PNG/256x256/PhotoCamera_Retro.png'
              }
              ]

// const List = React.createClass({
class List extends React.Component{

  render() {
    let camera = cameras[1];

    return(
      <ul>
        <li>{cameras[0].model}
          <img src={cameras[0].src} />
        </li>
        <li>{camera.model}
          <img src={cameras[1].src} />
        </li>
      </ul>
    );
  }
};
// });

export default List;
