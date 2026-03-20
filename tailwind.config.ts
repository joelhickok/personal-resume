module.exports = {
    // ... rest of tailwind config
    extend: {
        screens: {
            print: {raw: 'print'},
            screen: {raw: 'screen'},
            breakAfter: ['responsive', 'print'],
        },
    },
}
