/*
 * @Author: 李星阳
 * @Date: 2023-09-13 21:55:26
 * @LastEditors: 李星阳
 * @LastEditTime: 2023-09-13 22:04:46
 * @Description: 
 */
// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hello world';
    }
    async news() {
        this.ctx.body = 'news+++++++++';
    }
}

module.exports = HomeController;

