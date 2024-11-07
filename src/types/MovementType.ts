export interface Point {
    x: number;
    y: number;
}

export interface LinearMovement {
    type: 'linear';
    to: Point;
}

export interface CircularMovement {
    type: 'circular';
    center: Point;
    radius: number;
    startAngle: number;
    endAngle: number;
}

export type MovementType = LinearMovement | CircularMovement; 