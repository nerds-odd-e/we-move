export class Mushroom extends SvgObject {
    constructor(canvas: SVGElement, x: number, y: number) {
        const mushroomSvg = `
            <svg width="20" height="20" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" fill="red"/>
                <rect x="6" y="10" width="8" height="8" fill="tan"/>
            </svg>
        `;
        super(canvas, mushroomSvg, x, y);
    }
} 