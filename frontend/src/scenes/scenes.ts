import { Params, Scene, SceneConfig, LoadedScene } from 'scenes/sceneTypes'
import { Error404 as Error404Component } from '~/layout/Error404'
import { ErrorNetwork as ErrorNetworkComponent } from '~/layout/ErrorNetwork'
import { ErrorProjectUnavailable as ErrorProjectUnavailableComponent } from '~/layout/ErrorProjectUnavailable'
import { urls } from 'scenes/urls'

export const emptySceneParams = { params: {}, searchParams: {}, hashParams: {} }

export const preloadedScenes: Record<string, LoadedScene> = {
    [Scene.Error404]: {
        name: Scene.Error404,
        component: Error404Component,
        sceneParams: emptySceneParams,
    },
    [Scene.ErrorNetwork]: {
        name: Scene.ErrorNetwork,
        component: ErrorNetworkComponent,
        sceneParams: emptySceneParams,
    },
    [Scene.ErrorProjectUnavailable]: {
        name: Scene.ErrorProjectUnavailable,
        component: ErrorProjectUnavailableComponent,
        sceneParams: emptySceneParams,
    },
}

export const sceneConfigurations: Partial<Record<Scene, SceneConfig>> = {
    // Project-based routes
    [Scene.Dashboards]: {
        projectBased: true,
        name: 'Dashboards',
    },
    [Scene.Dashboard]: {
        projectBased: true,
    },
    [Scene.Insights]: {
        projectBased: true,
        name: 'Insights',
    },
    [Scene.InsightRouter]: {
        projectBased: true,
        name: 'Insights',
    },
    [Scene.Cohorts]: {
        projectBased: true,
        name: 'Cohorts',
    },
    [Scene.Events]: {
        projectBased: true,
        name: 'Events & actions',
    },
    [Scene.Actions]: {
        projectBased: true,
        name: 'Events & actions',
    },
    [Scene.EventStats]: {
        projectBased: true,
        name: 'Events & actions',
    },
    [Scene.EventPropertyStats]: {
        projectBased: true,
        name: 'Events & actions',
    },
    [Scene.Sessions]: {
        projectBased: true,
        name: 'Sessions',
    },
    [Scene.SessionRecordings]: {
        projectBased: true,
        name: 'Recordings',
    },
    [Scene.Person]: {
        projectBased: true,
        name: 'Person',
    },
    [Scene.Persons]: {
        projectBased: true,
        name: 'Persons & groups',
    },
    [Scene.Action]: {
        projectBased: true,
    },
    [Scene.Groups]: {
        projectBased: true,
        name: 'Persons & groups',
    },
    [Scene.FeatureFlags]: {
        projectBased: true,
        name: 'Feature flags',
    },
    [Scene.FeatureFlag]: {
        projectBased: true,
    },
    [Scene.Annotations]: {
        projectBased: true,
        name: 'Annotations',
    },
    [Scene.Plugins]: {
        projectBased: true,
        name: 'Plugins',
    },
    [Scene.SavedInsights]: {
        projectBased: true,
        name: 'Insights',
    },
    [Scene.ProjectSettings]: {
        projectBased: true,
        hideDemoWarnings: true,
        name: 'Project settings',
    },
    [Scene.Personalization]: {
        projectBased: true,
        plain: true,
        hideTopNav: true,
    },
    [Scene.Ingestion]: {
        projectBased: true,
        plain: true,
    },
    [Scene.OnboardingSetup]: {
        projectBased: true,
        hideDemoWarnings: true,
    },
    // Organization-based routes
    [Scene.OrganizationCreateFirst]: {
        name: 'Organization creation',
    },
    [Scene.OrganizationSettings]: {
        organizationBased: true,
    },
    [Scene.ProjectCreateFirst]: {
        name: 'Project creation',
        organizationBased: true,
    },
    // Onboarding/setup routes
    [Scene.Login]: {
        onlyUnauthenticated: true,
    },
    [Scene.Signup]: {
        onlyUnauthenticated: true,
    },
    [Scene.PreflightCheck]: {
        onlyUnauthenticated: true,
    },
    [Scene.PasswordReset]: {
        allowUnauthenticated: true,
    },
    [Scene.PasswordResetComplete]: {
        allowUnauthenticated: true,
    },
    [Scene.InviteSignup]: {
        allowUnauthenticated: true,
        plain: true,
    },
    // Instance management routes
    [Scene.SystemStatus]: {
        instanceLevel: true,
    },
    [Scene.Licenses]: {
        instanceLevel: true,
    },
    // Personal routes
    [Scene.MySettings]: {
        personal: true,
    },
    // Cloud-only routes
    [Scene.Billing]: {
        hideDemoWarnings: true,
        organizationBased: true,
    },
    [Scene.BillingSubscribed]: {
        plain: true,
        hideTopNav: true,
        allowUnauthenticated: true,
    },
}

export const redirects: Record<string, string | ((params: Params) => string)> = {
    '/': urls.savedInsights(),
    '/dashboards': urls.dashboards(),
    '/plugins': urls.plugins(),
    '/actions': '/events/actions',
    '/organization/members': urls.organizationSettings(),
}

export const routes: Record<string, Scene> = {
    [urls.dashboards()]: Scene.Dashboards,
    [urls.dashboard(':id')]: Scene.Dashboard,
    [urls.createAction()]: Scene.Action,
    [urls.action(':id')]: Scene.Action,
    [urls.newInsight()]: Scene.InsightRouter,
    [urls.insights()]: Scene.Insights,
    [urls.insightRouter(':id')]: Scene.InsightRouter,
    [urls.actions()]: Scene.Actions,
    [urls.eventStats()]: Scene.EventStats,
    [urls.eventPropertyStats()]: Scene.EventPropertyStats,
    [urls.events()]: Scene.Events,
    [urls.sessions()]: Scene.Sessions,
    [urls.sessionRecordings()]: Scene.SessionRecordings,
    [urls.person('*')]: Scene.Person,
    [urls.persons()]: Scene.Persons,
    [urls.groups(':groupTypeIndex')]: Scene.Groups,
    [urls.cohort(':id')]: Scene.Cohorts,
    [urls.cohorts()]: Scene.Cohorts,
    [urls.featureFlags()]: Scene.FeatureFlags,
    [urls.featureFlag(':id')]: Scene.FeatureFlag,
    [urls.annotations()]: Scene.Annotations,
    [urls.projectSettings()]: Scene.ProjectSettings,
    [urls.plugins()]: Scene.Plugins,
    [urls.projectCreateFirst()]: Scene.ProjectCreateFirst,
    [urls.organizationSettings()]: Scene.OrganizationSettings,
    [urls.organizationBilling()]: Scene.Billing,
    [urls.billingSubscribed()]: Scene.BillingSubscribed,
    [urls.organizationCreateFirst()]: Scene.OrganizationCreateFirst,
    [urls.instanceLicenses()]: Scene.Licenses,
    [urls.systemStatus()]: Scene.SystemStatus,
    [urls.systemStatusPage(':id')]: Scene.SystemStatus,
    [urls.mySettings()]: Scene.MySettings,
    [urls.savedInsights()]: Scene.SavedInsights,
    // Onboarding / setup routes
    [urls.login()]: Scene.Login,
    [urls.preflight()]: Scene.PreflightCheck,
    [urls.signup()]: Scene.Signup,
    [urls.inviteSignup(':id')]: Scene.InviteSignup,
    [urls.passwordReset()]: Scene.PasswordReset,
    [urls.passwordResetComplete(':uuid', ':token')]: Scene.PasswordResetComplete,
    [urls.personalization()]: Scene.Personalization,
    [urls.ingestion()]: Scene.Ingestion,
    [urls.ingestion() + '/*']: Scene.Ingestion,
    [urls.onboardingSetup()]: Scene.OnboardingSetup,
}
