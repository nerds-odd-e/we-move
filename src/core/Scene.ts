export class Scene {
    private actions: Action[] = [];
    
    constructor(private name: string) {}

    addAction(action: Action) {
        this.actions.push(action);
    }

    async execute() {
        for (const action of this.actions) {
            await action.execute();
        }
    }
} 