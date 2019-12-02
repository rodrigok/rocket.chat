import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/admin/user-status-custom', {
	name: 'user-status-custom',
	async action(/* params */) {
		await import('./views');
		BlazeLayout.render('main', { center: 'adminUserStatus' });
	},
});
