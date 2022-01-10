export const useTitle = (titleName?: string) => useState<string>('title', () => titleName ?  titleName : ' ')
export const useTheme = () => useState<string>('theme', () => 'dark')
