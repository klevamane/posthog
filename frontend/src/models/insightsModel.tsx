import { LemonDialog, LemonInput } from '@posthog/lemon-ui'
import { actions, connect, kea, listeners, path } from 'kea'
import { LemonField } from 'lib/lemon-ui/LemonField'
import { lemonToast } from 'lib/lemon-ui/LemonToast/LemonToast'
import { insightsApi } from 'scenes/insights/utils/api'
import { teamLogic } from 'scenes/teamLogic'

import { QueryBasedInsightModel } from '~/types'

import type { insightsModelType } from './insightsModelType'

export const insightsModel = kea<insightsModelType>([
    path(['models', 'insightsModel']),
    connect(() => ({ logic: [teamLogic] })),
    actions(() => ({
        renameInsight: (item: QueryBasedInsightModel) => ({ item }),
        renameInsightSuccess: (item: QueryBasedInsightModel) => ({ item }),
        //TODO this duplicates the insight but not the dashboard tile (e.g. if duplicated from dashboard you lose tile color
        duplicateInsight: (item: QueryBasedInsightModel) => ({ item }),
        duplicateInsightSuccess: (item: QueryBasedInsightModel) => ({ item }),
        insightsAddedToDashboard: ({ dashboardId, insightIds }: { dashboardId: number; insightIds: number[] }) => ({
            dashboardId,
            insightIds,
        }),
    })),
    listeners(({ actions }) => ({
        renameInsight: async ({ item }) => {
            LemonDialog.openForm({
                title: 'Rename insight',
                initialValues: { insightName: item.name },
                content: (
                    <LemonField name="insightName">
                        <LemonInput data-attr="insight-name" placeholder="Please enter the new name" autoFocus />
                    </LemonField>
                ),
                errors: {
                    insightName: (name) => (!name ? 'You must enter a name' : undefined),
                },
                onSubmit: async ({ insightName }) => {
                    const updatedItem = await insightsApi.update(item.id, { name: insightName })
                    lemonToast.success(
                        <>
                            Renamed insight from <b>{item.name}</b> to <b>{insightName}</b>
                        </>
                    )
                    actions.renameInsightSuccess(updatedItem)
                },
            })
        },
        duplicateInsight: async ({ item }) => {
            const addedItem = await insightsApi.duplicate(item)

            actions.duplicateInsightSuccess(addedItem)
            lemonToast.success('Insight duplicated')
        },
    })),
])
