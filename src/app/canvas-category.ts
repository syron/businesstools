import { CanvasDataItem } from "./canvas-data-item";

export class CanvasCategory {
    public id: number;
    public name: string;
    public description: string;
    public singularName: string;
    public items: Array<CanvasDataItem>;
}
