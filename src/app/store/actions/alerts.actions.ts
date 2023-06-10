import { createActionGroup } from "@ngrx/store";
import { emptyProps } from "@ngrx/store";

export const AlertActions = createActionGroup({
    source: 'Alert',
    events: {
        'Show alert': emptyProps(),
        'Hide alert': emptyProps(),
    }
})