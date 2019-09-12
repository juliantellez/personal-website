import DataLayerEvents from './Constants/DataLayerEvents';

class DataLayer {
    private dataLayer: any;

    constructor() {
        if (!(window as any).dataLayer) {
            // Sentry implementation will eventually replace this
            console.error('Data Layer does not exist');
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
