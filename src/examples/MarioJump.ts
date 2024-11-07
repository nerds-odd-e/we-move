import { StageScript } from '../core/StageScript';
import { Scene } from '../core/Scene';
import { Movement } from '../core/Action';
import { Canvas } from '../core/Canvas';
import { Mario } from '../objects/Mario';
import { Mushroom } from '../objects/Mushroom';
import { MovementType } from '../types/MovementType';

export function createMarioJumpScript() {
    // Create canvas
    const canvas = new Canvas(400, 300);
    const svgElement = canvas.getSvgElement();

    // Create objects
    const mario = new Mario(svgElement, 50, 200);
    const mushroom = new Mushroom(svgElement, 200, 220);

    // Create script
    const script = new StageScript();
    const jumpScene = new Scene('mario-jump');

    // Add jumping movement
    const jumpUp: MovementType = {
        type: 'linear',
        to: { x: 120, y: 100 }
    };

    const jumpDown: MovementType = {
        type: 'linear',
        to: { x: 280, y: 200 }
    };

    jumpScene.addAction(new Movement(mario, jumpUp, 500));
    jumpScene.addAction(new Movement(mario, jumpDown, 1000));

    script.addScene(jumpScene);

    return { script, canvas };
} 