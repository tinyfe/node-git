"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processAsync = void 0;
function processAsync(process, cmd, cb) {
    if (typeof cmd === 'function') {
        cb = cmd;
        cmd = '';
    }
    process.on('error', err => {
        cb(err);
    });
    let stderr = '';
    let stdout = '';
    process.stderr.on('data', chunk => {
        stderr += chunk.toString();
    });
    process.stdout.on('data', chunk => {
        stdout += chunk.toString();
    });
    process.on('close', (status) => {
        if (status === 0) {
            cb(null, stdout, stderr);
        }
        else {
            cb(new Error(((cmd ? `'${cmd}' failed with status ` + status + '\n' : '') + stderr).trim()));
        }
    });
}
exports.processAsync = processAsync;
