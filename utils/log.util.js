class Log {
    info(text){
        console.log('[INFO] $(text) [INFO]');
    }
    warning(text){
        console.log('[warning] ${text}  [warning]');
    }
    error(text){
        console.log('[error] ${text}  [error]');
    }

}
module.exports = new Log();
