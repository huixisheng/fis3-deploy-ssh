# fis3-deploy-ssh

fis3执行ssh命令



    fis.match('**', {
        deploy: [
            fis.plugin('ssh', {
                ssh: {},
                command: 'ls'
            })
        ]
    })