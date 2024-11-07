import { createMarioJumpScript } from './examples/MarioJump';

async function main() {
    const { script, canvas } = createMarioJumpScript();
    
    // Mount canvas to the page
    canvas.mount(document.getElementById('animation-container')!);
    
    // Play the animation
    await script.play();
}

main(); 