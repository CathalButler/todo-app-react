async function getTasks(parent, args, context, info) {
    const where = args.filter
        ? {
            OR: [
                {description: {contains: args.filter}},
                {url: {contains: args.filter}}
            ]
        }
        : {};

    const tasks = await context.prisma.task.findMany({
        where,
        skip: args.skip,
        take: args.take,
        orderBy: args.orderBy,
    });

    const count = await context.prisma.task.count({where});

    console.log(tasks);
    console.log(count);


    return tasks;

    // Todo - Workout the issue here when returning more then one value.
    // return {
    //     tasks,
    //     count
    // };
}

async function getUsers(parent, args, context, info) {
    const users = await context.prisma.user.findMany({});

    return users
}


module.exports = {
    getTasks,
    getUsers
};