import React from "react";
import JPlayer, {
  initializeOptions,
  Poster,
  Audio,
  Title,
  Mute,
  Play,
  VolumeBar,
  BrowserUnsupported
} from "react-jplayer";

import { connect } from "react-redux";
const defaultOptions = {
  id: "AudioPlayer",
  keyEnabled: true,
  globalVolume: true,
  media: {
    title: "Live",
    artist: "KGKG",
    poster:
      "http://res.cloudinary.com/prusa/image/upload/c_scale,h_48,w_81/v1474963705/Team/Raj_bduudv.jpg",
    sources: {
      mp3: "http://s2.voscast.com:7016/;"
    }
  }
};

initializeOptions(defaultOptions);
const mapStateToProps = state => {
  state.jPlayers.AudioPlayer.media.title = "live1";
  state.jPlayers.AudioPlayer.media.artist = "Cuurent";
  state.jPlayers.AudioPlayer.media.poster =
    "http://res.cloudinary.com/prusa/image/upload/c_scale,h_48,w_81/v1474963705/Team/Raj_bduudv.jpg";
  return { radio_name: state.footer.radio_name };
};

class AudioPlayer extends React.Component {
  render() {
    return (
      <div id="top-player">
        <JPlayer id={defaultOptions.id}>
          <div id="jquery_jplayer_1" className="jp-jplayer">
            <Audio />
          </div>
          <div className="jp-gui jp-interface">
            <div className="jp-details">
              <div className="jp-title-container">
                <div className="jp-title">
                  <Poster />
                  <Title />
                </div>
              </div>
            </div>
            <div className="jp-controls">
              <div className="jp-play-wrap">
                <Play className="prusa-play">
                  <div className="jp-play-front" />
                  <div className="jp-play-back" />
                </Play>
              </div>
            </div>

            <div className="jp-volume-controls">
              <Mute />
              <div className="jp-volume-slider">
                <div className="jp-volume-bar-value">
                  <VolumeBar />
                </div>
              </div>
            </div>

            <BrowserUnsupported />
          </div>
        </JPlayer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AudioPlayer);
