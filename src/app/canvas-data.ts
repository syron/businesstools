import { CanvasDataItem } from './canvas-data-item';

export class CanvasData {
    public id: number;
    public name: string;
    public designedFor: string;
    public keyResources: Array<CanvasDataItem>;
    public channels: Array<CanvasDataItem>;
    public costStructure: Array<CanvasDataItem>;
    public customerRelationships: Array<CanvasDataItem>;
    public customerSegments: Array<CanvasDataItem>;
    public keyActivities: Array<CanvasDataItem>;
    public keyPartners: Array<CanvasDataItem>;
    public revenueStreams: Array<CanvasDataItem>;
    public valuePropositions: Array<CanvasDataItem>;
}
