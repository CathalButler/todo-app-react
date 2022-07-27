async function task(parent, args, context, task) {
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
        orderBy: args.orderBy
    });

    const count = await context.prisma.task.count({where});

    return {
        id: 'tasks',
        tasks,
        count
    };
}

module.exports = {
    task
};