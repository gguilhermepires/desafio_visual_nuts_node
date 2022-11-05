const ShowNumbers = require('../ShowNumbers');

test('print 100', () => {
    const totalNumbers = 100;
    const showNumbers = new ShowNumbers()

    const result = showNumbers.show(totalNumbers);

    let countVisual = 0;
    let countNuts = 0;
    let countVisualNuts = 0;
    for (const data of result) {
        if (data === 'Nuts')
            countNuts += 1;
        if (data === 'Visual')
            countVisual += 1;
        if (data === 'Visual Nuts')
            countVisualNuts += 1;
    }

    expect(countVisualNuts).toBe(6);
    expect(countVisual).toBe(27);
    expect(countNuts).toBe(13);
});

test('print 0', () => {
    const totalNumbers = 0;
    const showNumbers = new ShowNumbers()

    const result = showNumbers.show(totalNumbers);

    expect(result.length).toBe(0);
});