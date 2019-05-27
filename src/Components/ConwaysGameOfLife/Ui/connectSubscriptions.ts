import { Subscription } from "rxjs";

import Ui from "./Ui";

const connectSubscriptions = (ui: Ui): Array<Subscription> => {
    return [
        ui.producers.resize$.subscribe(ui.resize.bind(ui)),
    ]
} 

export default connectSubscriptions;
