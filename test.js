import test from 'ava';
import esmock from 'esmock';

test('inside a container', async t => {
	const isInsideContainer = await esmock('./index.js', {
		fs: {
			statSync: () => true,
		},
	});

	t.true(isInsideContainer());
});
