export interface PostCardProps {
    imageSrc: string;
    title: string;
    description: string;
    link: string;
}

export interface PostListProps {
    posts: PostCardProps[];
}
