export interface PostCardProps {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
    userId: string;
    slug: string;
}

export interface PostListProps {
    posts: PostCardProps[];
}
