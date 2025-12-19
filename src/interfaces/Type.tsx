export interface User {
    login: string;
    name: string;
    bio: string;
    avatar_url: string;
    repos_url: string
}

export interface Repos {
    id: number;
    name: string;
    description: string;
    visibility: string;
    html_url: string;
    language: string;

}