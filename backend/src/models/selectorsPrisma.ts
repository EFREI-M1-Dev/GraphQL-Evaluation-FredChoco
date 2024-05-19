export const userSelect = {
    id: true,
    username: true,
    email: true
};

export const userJWTSelect = {
    id: true,
    username: true,
};

export const postSelect = {
    id: true,
    title: true,
    content: true,
    user: {
        select: userSelect
    },
    createdAt: true,
    imagePath: true,
};

export const likeSelect = {
    id: true,
    post: {
        select: postSelect
    },
    user: {
        select: userSelect
    },
    createdAt: true,
};

export const dislikeSelect = {
    id: true,
    post: {
        select: postSelect
    },
    user: {
        select: userSelect
    },
    createdAt: true,
};

export const commentSelect = {
    id: true,
    content: true,
    user: {
        select: userSelect
    },
    post: {
        select: postSelect
    },
    createdAt: true,
};