const posts =[
{id : 1, title : 'Post One'},
{id : 1, title : 'Post Two'}
];
 
export const getPosts = () => posts;

// export { getPosts };
//or we cn use this method when we are using react exporting of components

export default getPosts;

export const getPostsLength =()=> posts.length;