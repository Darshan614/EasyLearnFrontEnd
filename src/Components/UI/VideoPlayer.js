import YouTube from "react-youtube";

function VideoPlayer({ videoId }) {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
}

export default VideoPlayer;
