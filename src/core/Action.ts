import { MovementType } from '../types/MovementType';
import { SvgObject } from './SvgObject';

export interface Action {
    execute(): Promise<void>;
}

export class Movement implements Action {
    constructor(
        private object: SvgObject,
        private movement: MovementType,
        private duration: number = 1000
    ) {}

    async execute(): Promise<void> {
        return new Promise((resolve) => {
            // Apply movement animation
            this.object.element.style.transition = `transform ${this.duration}ms`;
            
            switch (this.movement.type) {
                case 'linear':
                    this.object.setPosition(this.movement.to.x, this.movement.to.y);
                    break;
                case 'circular':
                    // Implement circular movement
                    break;
            }

            setTimeout(resolve, this.duration);
        });
    }
} 