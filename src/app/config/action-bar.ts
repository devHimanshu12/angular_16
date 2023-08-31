const svgPath = 'assets/images/'

export const listsIconPath = {
    track: svgPath + 'track-icon.svg',
    insights: svgPath + 'lists-insights-icon.svg',
    feeds: svgPath + 'feeds-icon.svg',
    save: svgPath + 'save-list-icon.svg'
}


export const ActionBarArray = [
    {
        action: 'track',
        iconPath: listsIconPath.track
    },
    {
        action: 'insights',
        iconPath: listsIconPath.insights
    },
    {
        action: 'feeds',
        iconPath: listsIconPath.feeds
    },
    {
        action: 'save',
        iconPath: listsIconPath.save
    },
    {
        action: 'menu',
        iconPath: listsIconPath.save
    }
]