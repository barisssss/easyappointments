/* ----------------------------------------------------------------------------
 * Easy!Appointments - Open Source Web Scheduler
 *
 * @package     EasyAppointments
 * @author      A.Tselegidis <alextselegidis@gmail.com>
 * @copyright   Copyright (c) Alex Tselegidis
 * @license     https://opensource.org/licenses/GPL-3.0 - GPLv3
 * @link        https://easyappointments.org
 * @since       v1.5.0
 * ---------------------------------------------------------------------------- */

App.Http.Account = (function () {
    /**
     * Save account.
     *
     * @param {Object} account
     *
     * @return {Object}
     */
    function save(account) {
        const url = App.Utils.Url.siteUrl('account/save');

        const data = {
            csrf_token: App.Vars.csrf_token,
            account
        };

        return $.post(url, data);
    }

    /**
     * Validate username.
     *
     * @param {String} username
     *
     * @return {Object}
     */
    function validateUsername(username) {
        const url = App.Utils.Url.siteUrl('account/validate_username');

        const data = {
            csrf_token: App.Vars.csrf_token,
            username
        };

        return $.post(url, data);
    }

    return {
        save,
        validateUsername
    };
})();