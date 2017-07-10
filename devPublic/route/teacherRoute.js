/**
 * Created by huy on 5/15/17.
 */

const routes = function () {
    m.route(document.getElementById('app'), '/', {
        '/': set_layout(),
        '/home': set_layout(),
        '/question/:id/:action': set_layout(),
        '/sign-in': set_layout,

    })
}