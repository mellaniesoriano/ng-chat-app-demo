const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

const pusher = new Pusher({
	appId: 'insert-your-app-id-here',
	key: 'insert-your-app-key-here',
	secret: 'insert-your-secret-here',
});

router.get('/', (req, res) => {
	res.send('all good');
});

router.post('/pusher/auth', (req, res) => {
	console.log('POST to /pusher/auth');
	const socketId = req.body.socket_id;
	const channel = req.body.channel_name;
	const auth = pusher.authenticate(socketId, channel);
	res.send(auth);
});

module.exports = router;