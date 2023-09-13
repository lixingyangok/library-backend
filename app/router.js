/*
 * @Author: 李星阳
 * @Date: 2023-09-13 21:53:54
 * @LastEditors: 李星阳
 * @LastEditTime: 2023-09-13 21:53:59
 * @Description: 
 */
// app/router.js
<<<<<<< HEAD
// module.exports = (app) => {
//     const { router, controller } = app;
//     router.get('/', controller.home.index);
// };

// app/router.js
module.exports = (app) => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.home.news);
};
=======
module.exports = (app) => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
};
>>>>>>> 643761f612109bad15991ca9420c71193ac95448
