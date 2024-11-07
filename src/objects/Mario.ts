export class Mario extends SvgObject {
    constructor(canvas: SVGElement, x: number, y: number) {
        const marioSvg = `
            <svg width="30" height="30" viewBox="0 0 30 30">
                <rect x="5" y="5" width="20" height="20" fill="red"/>
                <rect x="5" y="25" width="8" height="5" fill="brown"/>
                <rect x="17" y="25" width="8" height="5" fill="brown"/>
            </svg>
        `;
        super(canvas, marioSvg, x, y);
    }
} 