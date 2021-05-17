const names = [
    'James',
    'Mary',
    'Robert',
    'Patricia',
    'John',
    'Michael',
    'Linda',
    'William',
    'Elizabeth',
    'David',
    'Barbara',
    'Richard',
    'Susan',
    'Joseph',
    'Jessica',
    'Thomas',
    'Charles',
    'Karen',
    'Christopher',
    'Nancy',
    'Daniel',
    'Lisa',
    'Matthew',
    'Betty',
    'Anthony',
    'Margaret',
    'Mark',
    'Sandra',
];

export const getAllUsers = async () => {
    // generate users randomly
    const totalCount = Math.random() * (names.length - 5) + 5;
    const users = [...names.sort(() => Math.random() - 0.5)]
        .filter((val: string, index: number) => {
            return index < totalCount;
        })
        .map((val: string, index: number) => {
            return { name: val, id: index + 1 };
        });
    return users;
};
