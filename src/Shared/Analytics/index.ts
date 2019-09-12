import DataLayerEvents from "./Constants/DataLayerEvents";

class DataLayer {
    private dataLayer: any;

    constructor() {
        if (!(window as any).dataLayer) {
            console.error('(window as any).dataLayer');
        }

        this.dataLayer = (window as any).dataLayer || [];
    }

    public push(eventName: DataLayerEvents, data: any): void {
        this.dataLayer.push({
            event: eventName,
            data
        });
    }
}

export default new DataLayer();
