import { OnePost } from './post.class';

export const POSTLIST: OnePost[] = [
    {
        title: 'Premier post', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et enim a augue efficitur efficitur. Phasellus eget ultrices magna, in rhoncus enim. Nunc feugiat, metus et convallis sodales, nibh nunc semper ipsum, at pharetra purus orci quis mauris.', 
        loveIts: 2,
        postCreatedAt: new Date()
    },
    {
        title: 'Deuxième post', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et enim a augue efficitur efficitur. Phasellus eget ultrices magna, in rhoncus enim. Nunc feugiat, metus et convallis sodales, nibh nunc semper ipsum, at pharetra purus orci quis mauris.', 
        loveIts: -1,
        postCreatedAt: new Date()
    },
    {
        title: 'Troisième post', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et enim a augue efficitur efficitur. Phasellus eget ultrices magna, in rhoncus enim. Nunc feugiat, metus et convallis sodales, nibh nunc semper ipsum, at pharetra purus orci quis mauris.', 
        loveIts: 2,
        postCreatedAt: new Date()
    }
]