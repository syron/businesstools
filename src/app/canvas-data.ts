import { CanvasDataItem } from './canvas-data-item';
import { CanvasCategory } from './canvas-category';

export class CanvasData {
    public id: number;
    public name: string;
    public designedFor: string;
    public keyResources: CanvasCategory;
    public channels: CanvasCategory;
    public costStructure: CanvasCategory;
    public customerRelationships: CanvasCategory;
    public customerSegments: CanvasCategory;
    public keyActivities: CanvasCategory;
    public keyPartners: CanvasCategory;
    public revenueStreams: CanvasCategory;
    public valuePropositions: CanvasCategory;
}
