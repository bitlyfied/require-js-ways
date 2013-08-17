{
    appDir: '../dev',
    dir: '../prod',
    modules: [
        {
            name: 'common',
            include: [
                'app'
            ]
        },
        
        {
            name: 'homepage',
            include: ['areas/homepage'],
            exclude: ['common']
        },

        // {
        //     name: 'product',
        //     include: ['areas/product'],
        //     exclude: ['common']
        // }

    ]
}
