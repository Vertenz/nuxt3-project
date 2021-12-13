export const useCounter = () => useState<number>('counter', () => 0)
export const useTitle = (titleName) => useState<string>('title', () => titleName ?  titleName : ' ')
export const useTheme = () => useState<string>('theme', () => 'dark')