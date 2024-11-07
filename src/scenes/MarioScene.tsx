import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Mario} from '../components/Mario';
import {Mushroom} from '../components/Mushroom';

export const MarioScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Mario jump animation
  const marioY = interpolate(
    frame,
    [0, 30, 60, 90],
    [0, -200, -200, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );
  
  // Mario forward movement
  const marioX = interpolate(
    frame,
    [0, 90],
    [0, 300],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#87CEEB',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 200,
          left: '50%',
          transform: `translate(${marioX}px, ${marioY}px)`,
        }}
      >
        <Mario />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 200,
          left: '50%',
          transform: 'translateX(150px)',
        }}
      >
        <Mushroom />
      </div>
    </AbsoluteFill>
  );
}; 