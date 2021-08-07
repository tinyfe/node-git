"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutPromisify = exports.checkout = void 0;
const child_process_1 = require("child_process");
const processAsync_1 = require("./processAsync");
const util_1 = require("util");
function checkout(checkout, { targetPath = '', git = '' } = {}, cb) {
    const args = ['checkout', checkout];
    const process = child_process_1.spawn(git, args, { cwd: targetPath });
    processAsync_1.processAsync(process, 'git-checkout', cb);
}
exports.checkout = checkout;
exports.checkoutPromisify = util_1.promisify(checkout);
