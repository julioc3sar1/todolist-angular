import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AlertState } from "src/app/models/alerts";

export const selectAlertsFeature = createFeatureSelector<AlertState>('alerts')

export const selectAlertStatus = createSelector(
    selectAlertsFeature,
    (state) => state.visible
)