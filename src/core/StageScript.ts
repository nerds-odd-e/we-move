export class StageScript {
    private scenes: Scene[] = [];
    
    addScene(scene: Scene) {
        this.scenes.push(scene);
    }

    async play() {
        for (const scene of this.scenes) {
            await scene.execute();
        }
    }
} 