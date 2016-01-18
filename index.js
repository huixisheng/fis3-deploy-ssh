var exec = require('node-ssh-exec');

module.exports = function(options, modified, total, next) {
    var command = options.command;
    var config = options.ssh;

    if (fis.util.is(config, 'Object') && !config['host']){
        fis.log.error('ssh 配置有问题, 参考', module.exports.options)
    }

    exec(config, command, function (error, response) {
        if (error) {
            throw error;
        }
        fis.log.info('执行命令%s成功,返回结果\n%s', command, response);
        next();
    });
}

module.exports.options = {
    ssh : {
        host: '192.168.6.169',
        username: 'root',
        password: '19901220'
    }
};