import {Composition} from 'remotion';
import {MarioScene} from './scenes/MarioScene';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="MarioJump"
        component={MarioScene}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
}; 