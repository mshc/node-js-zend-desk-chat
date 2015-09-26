// React code
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		_get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Header, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			(function ($) {
				var minimizeBtn = $('.window-controls .minimize');
				var maximizeBtn = $('.window-controls .expand');
				var chatBoxBody = $('#chat-box .body');

				minimizeBtn.click(function () {
					chatBoxBody.slideUp();
				});

				maximizeBtn.click(function () {
					chatBoxBody.slideDown();
				});
			})(jQuery);
		}
	}, {
		key: 'render',
		value: function render() {
			var title = 'Chicken House Help';
			return React.createElement(
				'section',
				{ className: 'header' },
				React.createElement(
					'h3',
					{ className: 'title' },
					title
				),
				React.createElement(
					'div',
					{ className: 'window-controls' },
					React.createElement(
						'span',
						{ className: 'expand' },
						'+'
					),
					React.createElement(
						'span',
						{ className: 'minimize' },
						'-'
					)
				)
			);
		}
	}]);

	return Header;
})(React.Component);

var ChatMessage = (function (_React$Component2) {
	_inherits(ChatMessage, _React$Component2);

	function ChatMessage() {
		_classCallCheck(this, ChatMessage);

		_get(Object.getPrototypeOf(ChatMessage.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(ChatMessage, [{
		key: 'render',
		value: function render() {
			var chatMessage = {
				business: function business(message) {
					return React.createElement(
						'li',
						{ className: 'recepient' },
						React.createElement('img', { src: '/images/avatars/female-avatar-1.png', className: 'avatar', alt: 'recepient avatar' }),
						React.createElement(
							'span',
							{ className: 'message' },
							message
						)
					);
				},
				customer: function customer(message) {
					return React.createElement(
						'li',
						{ className: 'sender' },
						React.createElement(
							'span',
							{ className: 'message offset-right' },
							message
						)
					);
				}
			};
			return chatMessage[this.props.messageType](this.props.messageText);
		}
	}]);

	return ChatMessage;
})(React.Component);

var ChatMessageList = (function (_React$Component3) {
	_inherits(ChatMessageList, _React$Component3);

	function ChatMessageList() {
		_classCallCheck(this, ChatMessageList);

		_get(Object.getPrototypeOf(ChatMessageList.prototype), 'constructor', this).call(this);
		this.state = {
			chatMessages: [{
				text: 'Hi. I\'m Alice and we\'re here to help you use the site better',
				type: 'business'
			}]
		};
	}

	_createClass(ChatMessageList, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'ul',
				{ className: 'no-style messages', id: 'messages-container' },
				this.state.chatMessages.map(function (message, id) {
					console.log(message);
					return React.createElement(ChatMessage, { key: id, messageText: message.text, messageType: message.type });
				})
			);
		}
	}]);

	return ChatMessageList;
})(React.Component);

var ChatForm = (function (_React$Component4) {
	_inherits(ChatForm, _React$Component4);

	function ChatForm() {
		_classCallCheck(this, ChatForm);

		_get(Object.getPrototypeOf(ChatForm.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(ChatForm, [{
		key: 'updateChatMessageList',

		// when a user presses enter the message gets appended to the chat message list
		value: function updateChatMessageList(event) {
			// 13 is the Enter keycode
			if (event.keyCode === 13) {
				console.log('Enter was pressed', event.target.value);
				var message = [{
					text: event.target.value,
					type: 'customer'
				}];
				React.createElement(ChatMessageList, { message: message });
				event.target.value = "";
				event.preventDefault();
			};
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'footer' },
				React.createElement(
					'form',
					{ action: '', method: 'post', id: 'chat-message-form' },
					React.createElement('textarea', { placeholder: 'Hi. I would like to receive help on ...', onKeyDown: this.updateChatMessageList.bind(this), name: 'message' })
				)
			);
		}
	}]);

	return ChatForm;
})(React.Component);

var ChatBoxBody = (function (_React$Component5) {
	_inherits(ChatBoxBody, _React$Component5);

	function ChatBoxBody() {
		_classCallCheck(this, ChatBoxBody);

		_get(Object.getPrototypeOf(ChatBoxBody.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(ChatBoxBody, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'section',
				{ className: 'body' },
				React.createElement(ChatMessageList, null),
				React.createElement(ChatForm, null)
			);
		}
	}]);

	return ChatBoxBody;
})(React.Component);

var ChatBox = (function (_React$Component6) {
	_inherits(ChatBox, _React$Component6);

	function ChatBox() {
		_classCallCheck(this, ChatBox);

		_get(Object.getPrototypeOf(ChatBox.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(ChatBox, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'aside',
				{ id: 'chat-box' },
				React.createElement(Header, null),
				React.createElement(ChatBoxBody, null)
			);
		}
	}]);

	return ChatBox;
})(React.Component);

React.render(React.createElement(ChatBox, null), document.body);

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count: props.initialCount};
//   }
//   tick() {
//     this.setState({count: this.state.count + 1});
//   }
//   render() {
//     return (
//       <button onClick={this.tick.bind(this)}>
//         Clicks: {this.state.count}
//       </button>
//     );
//   }
// }
// Counter.propTypes = { initialCount: React.PropTypes.number };
// Counter.defaultProps = { initialCount: 4 };

// React.render(<Counter/>, document.body);
