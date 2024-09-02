export interface PostCardProps {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
    userId: string
}

export interface PostListProps {
    posts: PostCardProps[];
}
