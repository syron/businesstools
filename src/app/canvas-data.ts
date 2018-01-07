import { CanvasDataItem } from './canvas-data-item';

export class CanvasData {
    public id: number;
    public name: string;
    public designedFor: string;
    public keyResources: Array<CanvasData>;
    public channels: Array<CanvasData>;
    public costStructure: Array<CanvasData>;
    public customerRelationships: Array<CanvasData>;
    public customerSegments: Array<CanvasData>;
    public keyActivities: Array<CanvasData>;
    public keyPartners: Array<CanvasData>;
    public revenueStreams: Array<CanvasData>;
    public valuePropositions: Array<CanvasData>;
}
