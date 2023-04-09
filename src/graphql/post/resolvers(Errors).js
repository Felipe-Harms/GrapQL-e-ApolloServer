const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const posts = await getPosts('/?' + apiFiltersInput);
  return posts.json();
};

const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();

  // simula um timeout
  // prettier-ignore
  //if(Math.random() > 0.5) {
  //  statusCode = 500,
  //  message = 'Timeout!',
  //  timeout = 1234
  //}

  // retorna erro caso id não exista
  if (typeof post.id == 'undefined') {
    return {
      statusCode: 404,
      message: 'Post not found!',
      postId: 'id',
    };
  }

  return post;
};

export const postResolvers = {
  Query: { post, posts },
  Post: {
    unixTimestamp: (createdAt) => {
      const timestamp = new Date(createdAt).getTime() / 1000;
      return Math.floor(timestamp);
    },
  },
  PostResult: {
    __resolveType(obj) {
      if (typeof postId !== 'undefined') return 'PostNotFoundError';
      if (typeof timeout !== 'undefined') return 'PostTimeoutError';
      if (typeof obj.id !== 'undefined') return 'Post';
      return null;
    },
  },

  PostError: {
    __resolveType(obj) {
      if (typeof postId !== 'undefined') return 'PostNotFoundError';
      if (typeof timeout !== 'undefined') return 'PostTimeoutError';
      return null;
    },
  },
};
