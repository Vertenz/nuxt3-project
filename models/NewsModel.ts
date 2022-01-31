interface NewsModel {
    id: number,
    title: string,
    type: string,
    technology: string,
    description: string,
    link: string | boolean
}

export default NewsModel;