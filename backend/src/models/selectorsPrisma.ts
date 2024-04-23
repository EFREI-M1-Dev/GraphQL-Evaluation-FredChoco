export const userSelect = {
    id: true,
    username: true,
    email: true
};

export const postSelect = {
    id: true,
    title: true,
    content: true,
    user: {
        select: userSelect
    }
};

export const likeSelect = {
    id: true,
    post: {
        select: postSelect
    },
    user: {
        select: userSelect
    }
};

export const dislikeSelect = {
    id: true,
    post: {
        select: postSelect
    },
    user: {
        select: userSelect
    }
};

export const commentSelect = {
    id: true,
    content: true,
    user: {
        select: userSelect
    },
    post: {
        select: postSelect
    }
};