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
import {currentShow} from "../../actions";
const defaultOptions = {
  id: "AudioPlayer",
  keyEnabled: true,
  globalVolume: true,
  media: {
    title: "",
    artist: "KGKG",
    sources: {
      mp3: "http://s2.voscast.com:7016/;"
    }
  }
};

initializeOptions(defaultOptions);
const mapStateToProps = state => {
  if(state.schedule.current_show.live !== undefined && state.schedule.current_show.live=== true)
  state.jPlayers.AudioPlayer.media.title = "Live";
  else if(state.schedule.current_show.repeat !== undefined && state.schedule.current_show.repeat=== true)
    state.jPlayers.AudioPlayer.media.title = "Repeat";
  state.jPlayers.AudioPlayer.media.artist = state.schedule.current_show.radio_show;
  return { radio_name: state.footer.radio_name };
};

class AudioPlayer extends React.Component {
  componentDidMount() {
    this.props.currentShow();
  }

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

                <div  className="jp-title currentShow">
                  <Poster />
                  <Title/>
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

export default connect(mapStateToProps,{currentShow})(AudioPlayer);
