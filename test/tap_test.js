var tap = require('tap');
var Config = require('./../index');


tap.test('merging properties', function(t){
	var config = new Config({a: [1,2], b: {foo: 'bar'}});
	config.set('a', [3,4]);
	config.set('b', {alpha: 'beta'})

	t.deepEqual(config.get('a'), [1,2,3,4], 'arrays should merge');

	t.deepEqual(config.get('b'), {foo: 'bar', alpha: 'beta'}, 'objects should merge');

	t.end();
})

tap.test('has', function(t){

	var config = new Config({a: 1, b: 0});

	t.ok(config.has('a'), 'has a');
	t.ok(config.has('b'), 'has b');
	t.ok(!config.has('c'), 'doesnot have c');
	t.equals(config.get('b'), 0, 'b == 0');
	t.end();
})